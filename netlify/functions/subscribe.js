// Netlify function to proxy MailerLite form submissions
// This avoids CORS issues and keeps the implementation clean

const MAILERLITE_ACCOUNT_ID = '1976134';
const MAILERLITE_FORM_ID = '37scIv';

export async function handler(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
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

    // Submit to MailerLite's form endpoint
    const formData = new URLSearchParams();
    formData.append('fields[email]', email);
    formData.append('ml-submit', '1');
    formData.append('anticsrf', 'true');

    const response = await fetch(
      `https://assets.mailerlite.com/jsonp/${MAILERLITE_ACCOUNT_ID}/forms/${MAILERLITE_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    );

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
      };
    } else {
      const errorText = await response.text();
      console.error('MailerLite error:', errorText);
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
