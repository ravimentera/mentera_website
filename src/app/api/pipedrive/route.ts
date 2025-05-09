import { NextResponse } from 'next/server';
import { isValidEmail } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log('Processing request for email:', email);
    
    if (!isValidEmail(email)) {
      console.log('Email validation failed for:', email);
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    const apiToken = process.env.PIPEDRIVE_API_TOKEN || '523e85829b3dfe542b72cf79ff3656a4a2928a3e';
    const domain = process.env.PIPEDRIVE_DOMAIN || 'mentera';
    
    // Log person creation request
    const personRequestBody = {
      name: email.split('@')[0],
      email: [{ value: email, primary: true }]
    };
    
    
    // Create person
    const personResponse = await fetch(
      `https://${domain}.pipedrive.com/api/v1/persons?api_token=${apiToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personRequestBody),
      }
    );
    
    // Log response status
    
    const personData = await personResponse.json();
    
    if (!personData.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to create person in Pipedrive', details: personData.error || 'Unknown error' },
        { status: 500 }
      );
    }
    
    
    // Prepare lead creation request
    const leadRequestBody = {
      title: `Beta Signup: ${email}`,
      person_id: personData.data.id
    };

    // Create lead
    const leadResponse = await fetch(
      `https://${domain}.pipedrive.com/api/v1/leads?api_token=${apiToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadRequestBody),
      }
    );
    
    // Log response status
    
    const leadData = await leadResponse.json();
    
    if (!leadData.success) {
      console.error('Lead creation failed:', leadData.error, leadData.error_info);
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
    console.error('Unhandled error in API route:', error);  
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      },
      { status: 500 }
    );
  }
}