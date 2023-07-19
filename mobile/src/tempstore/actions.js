import { Platform } from 'react-native';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';

// Action to fetch user ID by email from the API
export const fetchUserId = (email) => {
  return (dispatch) => {
    // Dispatch an action to indicate that the fetching process has started
    dispatch({ type: 'FETCH_USER_ID_REQUEST' });

    // Make an API request to fetch the userId
    fetch(`${API_URL}/getId`, {
      method: 'POST', // Change the method to POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Pass the email in the request body
    })
      .then((response) => {
        // Check if the response status is OK (200)
        if (response.ok) {
          return response.json(); // Parse the response body as JSON
        } else if (response.status === 404) {
          throw new Error('User not found'); // If user is not found, throw an error
        } else {
          throw new Error('Internal server error'); // For other error statuses, throw an error
        }
      })
      .then((data) => {
        // Dispatch an action with the retrieved userId
        dispatch({ type: 'FETCH_USER_ID_SUCCESS', payload: data.userId });
      })
      .catch((error) => {
        // Dispatch an action to indicate that the fetching process has failed
        dispatch({ type: 'FETCH_USER_ID_FAILURE', payload: error.message });
      });
  };
};
