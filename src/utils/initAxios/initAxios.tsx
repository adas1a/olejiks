import axios from 'axios';
// Todo move to separate file /utils/initAxios(done) + interceptor

export const initAxios = () => {
  axios.defaults.baseURL='/api/';
  const accessToken = localStorage.getItem('token');
  if (accessToken){
    axios.defaults.headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  }
  axios.interceptors.response.use( (response) => {
    return response;
  }, (error) => {
    if ((error.response.status === 401)) {
      window.location.assign('login');
    }
    return error;
  });
};
