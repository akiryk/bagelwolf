// Netlify function to add subscribers via MailerLite API

export async function handler(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey) {
    console.error('MAILERLITE_API_KEY environment variable is not set');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Valid email is required' }),
      };
    }

    // Submit to MailerLite's REST API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
      };
    } else {
      console.error('MailerLite error:', data);
      // Handle specific errors
      if (response.status === 422 && data.message?.includes('already')) {
        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, message: 'You\'re already subscribed!' }),
        };
      }
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Subscription failed. Please try again.' }),
      };
    }
  } catch (error) {
    console.error('Subscribe error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred. Please try again.' }),
    };
  }
}
