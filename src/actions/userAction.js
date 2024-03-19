// import jwt from 'jsonwebtoken';

// const login = (username, password) => {
//   return fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Authentication failed');
//     }
//     return response.json();
//   })
//   .then(data => data.token)
//   .catch(error => {
//     throw error;
//   });
// };

// export const loginUser = (username, password) => {
//   return dispatch => {
//     login(username, password)
//       .then(token => {
//         localStorage.setItem('token', token);
//         const decodedToken = jwt.decode(token);
//         dispatch({
//           type: 'LOGIN_SUCCESS',
//           payload: { user: decodedToken, token },
//         });
//       })
//       .catch(error => {
//         dispatch({
//           type: 'LOGIN_FAILURE',
//           payload: { error: error.message },
//         });
//       });
//   };
// };
