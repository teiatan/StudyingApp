import axios from 'axios';

export async function getData() {
    try {
        const tra = await getAllCourses();
        console.log(tra);
    } catch(error) {
      console.log(error.message);
    };
};

axios.defaults.baseURL = 'https://api.wisey.app/api/v1';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  const response = await axios.get('/auth/anonymous?platform=subscriptions');
  setToken(response.data.token);
};

export const getAllCourses = async () => {
  await getToken();
  const response = await axios.get('/core/preview-courses');
  return response.data.courses;
};

export const getOneCourse = async id => {
  await getToken();
  const response = await axios.get(`/core/preview-courses/${id}`);
  return response.data;
};