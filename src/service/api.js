import axios from 'axios';

export async function getData() {
    const host = `http://api.wisey.app`;
    const version = `api/v1`;
    const url1 = `auth/anonymous?platform=subscriptions`;
    const url2 = `core/preview-courses/:courseId`;
    const url3 = `auth/anonymous?platform=subscriptions`;
    const id = `26328116-5c032186-2cc6-4903-a3a7-fbad102e1141`;

    const url=`${host}/${version}/${url3}`;
    const tra = await getAllCourses();
        console.log(tra);
    try {
        //const tra = await getAllCourses();
        //console.log(tra);
        /* console.log(url);
      const request = await axios.get(url);
      const response = JSON.parse(request);
      console.log(response); */
    } catch(error) {
      console.log(error.message);
    };
};
/* 
const url1 = `{{host}}/{{version}}/auth/anonymous?platform=subscriptions`;
    const url2 = `{{host}}/{{version}}/core/preview-courses/:courseId`;
    const url3 = `{{host}}/{{version}}/auth/anonymous?platform=subscriptions`; */

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;  
};

const getToken = async () => {
    const response = await axios.get('/auth/anonymous?platform=subscriptions');
    setToken(response.data.token);
    console.log(response);
};

export const getAllCourses = async () => {
    await getToken();
    const response = await axios.get('/core/preview-courses/:courseId');
    console.log(response);
    return response.data.courses;
}