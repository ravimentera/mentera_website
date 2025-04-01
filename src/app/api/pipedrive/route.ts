import { NextResponse } from 'next/server';
import { isValidEmail } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    const apiToken = process.env.PIPEDRIVE_API_TOKEN;
    const domain = process.env.PIPEDRIVE_DOMAIN || 'mentera';
    
    // First, create a person
    const personResponse = await fetch(
      `https://${domain}.pipedrive.com/api/v1/persons?api_token=${apiToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: email.split('@')[0],
          email: [{ value: email, primary: true }],
          org_id: 1,
        }),
      }
    );
    
    const personData = await personResponse.json();
    if (!personData.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to create person in Pipedrive' },
        { status: 500 }
      );
    }
    
    // Create a lead instead of a deal
    const leadResponse = await fetch(
      `https://${domain}.pipedrive.com/api/v1/leads?api_token=${apiToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Beta Signup: ${email}`,
          person_id: personData.data.id,
          organization_id: 1
        }),
      }
    );
    
    const leadData = await leadResponse.json();
    if (!leadData.success) {
      console.error('Pipedrive Lead Creation Error:', {
        status: leadResponse.status,
        statusText: leadResponse.statusText,
        response: leadData
      });
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to create lead in Pipedrive',
          details: leadData.error || 'Unknown error'
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      person: personData.data,
      lead: leadData.data
    });
  } catch (error) {
    console.error('Error in Pipedrive API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      },
      { status: 500 }
    );
  }
}
