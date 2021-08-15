import axios from 'axios'

// Set global Authorization header with token
export default function setAuthToken(token){
    if (token) {
        // Set global header with the token of the auth user to make the request
        axios.defaults.headers.common["Authorization"] = token;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
}