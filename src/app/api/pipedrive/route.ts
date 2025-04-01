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
    const pipelineId = Number(process.env.PIPEDRIVE_PIPELINE_ID) || 1;
    const stageId = Number(process.env.PIPEDRIVE_STAGE_ID) || 1;

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

    // Then create a deal
    const dealResponse = await fetch(
      `https://${domain}.pipedrive.com/api/v1/deals?api_token=${apiToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Beta Signup: ${email}`,
          person_id: personData.data.id,
          pipeline_id: pipelineId,
          stage_id: stageId,
        }),
      }
    );

    const dealData = await dealResponse.json();

    if (!dealData.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to create deal in Pipedrive' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
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