export const addSubscriber = async (email, additionalFields = {}) => {
  try {
    const response = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        ...additionalFields
      })
    });
    
    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new Error('Invalid response from server');
    }
    
    if (!response.ok || data.error) {
      throw new Error(data.error || 'Subscription failed');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    
    if (error.message?.includes('already subscribed')) {
      return { success: false, error: 'This email is already subscribed.' };
    }
    
    return { 
      success: false, 
      error: 'Failed to subscribe. Please try again later.'
    };
  }
};