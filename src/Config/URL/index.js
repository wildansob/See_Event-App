import axios from 'axios';

export function apiLogin(dataLogin) {
  return axios({
    method: 'POST',
    url: 'https://see-events-teama.herokuapp.com/api/v1/auth/login',
    data: dataLogin,
  });
}
