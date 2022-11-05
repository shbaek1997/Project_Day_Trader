import axios from 'axios';
//나중에 config 폴더를 만들까?
const SERVER = 'http://localhost:5000';
const TOKEN = sessionStorage.getItem('token');
const apiClient = axios.create({
  baseURL: `${SERVER}`,
  headers: { Authorization: `Bearer ${TOKEN}` }
});

async function get(endpoint, params) {
  const apiURL = `${endpoint}/${params}`;
  const res = await apiClient.get(apiURL);
  console.log('res', res);
  if (!res.ok) {
    const errorContent = await res.json();
    const myError = new Error(errorContent.reason);
    throw myError;
  }
  return res.json();
}

async function post(endpoint, data) {
  try {
    const apiURL = `${endpoint}`;
    const bodyData = JSON.stringify(data);
    const res = await apiClient.post(apiURL, bodyData, {
      headers: { 'Content-Type': 'application/json' }
    });
    const result = res.data;
    return result;
  } catch (error) {
    const { response } = error;
    console.log(error);
    console.log(response);
    const errorInfo = response.data;
    alert(errorInfo.error);
  }
}

async function patch(endpoint, params, data) {
  const apiURL = `${endpoint}/${params}`;
  const bodyData = JSON.stringify(data);
  const res = await apiClient.patch(apiURL, bodyData, {
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    const errorContent = await res.json();
    const myError = new Error(errorContent.reason);
    throw myError;
  }
  return res.json();
}

async function del(endpoint, params, data = {}) {
  const apiURL = `${endpoint}/${params}`;
  const bodyData = JSON.stringify(data);
  const res = await apiClient.delete(apiURL, bodyData, {
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    const errorContent = await res.json();
    const myError = new Error(errorContent.reason);
    throw myError;
  }
  return res.json();
}

export { get, post, patch, del as delete };
