
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import userSlice from "../stores/user.reducer";

const host = 'http://192.168.1.159:9000/v1';
var tokens = '';

export async function getUser(obj) {
  // Access the token from the Redux store state
  console.log(userSlice)
  // const { token } = store.getState().user;

  // // Make API request with the token
  // // Example:
  // const response = await fetch('your/api/endpoint', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  // // Process the response and return the data
  // const data = await response.json();
  // return data;
}
const axiosInstance = axios.create();

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // config.headers = headers(getToken());

    config.headers.Authorization =  `Bearer ${getToken()}`;
    console.log(config)

  return config;

  },
  (error) => {
    console.log(error)

    // Handle request error
    return Promise.reject(error);
  }
);
 axiosInstance.interceptors.response.use(
  (response) =>{ 
    console.log(response)
    if (response.data.status === 200) {
      console.log('Success:', response.data);
      return response;
    } else if (response.data.status === 404) {
      console.log('Not Found:', response.statusText);
      return false;
    } else if (response.data.status === 500) {
      console.log('Internal Server Error');
      return false;
    } else {
      console.log('Unhandled status code:', response.data.status);
      return false;
    }  },
  (error) => {
    // Error
    console.log('error 117',error)
    return error.response

    const { config, response: { status } } = error;
    if (status === 400) {
      // Unauthorized request: maybe access token has expired!
      // return refreshAccessToken(config);
    } else {
      return Promise.reject(error);
    }
  }
);



const refreshAccessToken=(config)=>{
  console.log("Config",config)
//   return post('/api/refresh_token', {
//     'refresh_token': JSON.parse(localStorage.getItem('token'))['refresh_token']
// }).then(response => {
//     /*saveToken();*/
//     localStorage.setItem('token', JSON.stringify(response.data));
//     error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
//     return axios(error.response.config);
// }).catch(error => {
//     /*destroyToken();*/
//     localStorage.setItem('token', '');
//     this.router.push('/login');
//     return Promise.reject(error);
// }).finally(createAxiosResponseInterceptor);

}
export const GetWithHeaderToken = async (method, endpoint, token) => {
  console.log(token)
  tokens = token
  console.log(tokens)

  let v = await sellMomentumTask(method, endpoint);
  return v;
};

export const Post = async (method, endpoint, params) => {
  let v = await sellMomentumTask(method, endpoint, params);
  return v;
};
export const DeleteWithHeaderToken = async(method,endpoint,token) =>{
  console.log("method",method)
  console.log("endpoint",endpoint)
  console.log("endpoint",token)
  tokens = ''
  tokens = token


  let v = await sellMomentumTask(method, endpoint);
  return v;
}

export const PostWithHeaderToken = async (method, endpoint, params ,token) => {
  tokens = ''
  tokens = token
  let v = await sellMomentumTask(method, endpoint, params);
  return v;
};
export const PatchtWithHeaderToken = async (method, endpoint, params ,token) => {
  tokens = ''
  tokens = token
  let v = await sellMomentumTask(method, endpoint, params);
  return v;
};

function getToken() {
  console.log(tokens)
  // Implement your logic to get the token here
  // For example, you can retrieve it from localStorage or a state variable
  return tokens;
}

function sellMomentumTask(method, endpoint, params) {
    let config = {
      method: method,
      maxBodyLength: Infinity,
      url: `${host}${endpoint}`,
      data: params,
    };
  console.log("config",config)
  return axiosInstance
    .request(config)
    .then((response) => {
      console.log(response?.data);
      if (response.data.status === 200) {
              console.log('Success:', response.data);
              return response.data;
            } else if (response.data.status === 400) {
              // apiCall()
              console.log('Not Found:', response.data.message,);
              return response.data;
            } else if (response.data.status === 500) {
              console.log('Internal Server Error');
              return false;
            } else {
              console.log('Unhandled status code:', response.data.status);
              return false;
            }
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
}
