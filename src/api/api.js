import axios from 'axios';

const api = axios.request({
  baseURL: 'http://localhost:9000/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const Api = async (method,endpoint,datas) => {
    const apiUrl = 'http://192.168.1.158:9000/v1'+endpoint;
    console.log(apiUrl)
    console.log(datas)


    return axios.post(apiUrl,datas)
    .then((response) => {
      console.log('api 30',response,)
      if (response.status === 200) {
        console.log('Success:', response.data);

        return response.data
      } else if (response.status === 404) {
        return false
        console.log('Not Found:', response.statusText);
      } else if (response.status === 500) {
        console.log('Internal Server Error');
        return false
      } else {
        return false

        console.log('Unhandled status code:', response.status);
      }
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data

    });
    
};
export const ApiPostWithHeaderToken = async (method,endpoint,token) => {
  const apiUrl = 'http://192.168.1.158:9000/v1'+endpoint;
  console.log(apiUrl)
  console.log(token)


  return axios.post(apiUrl,{},{
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',

    },
  })
  .then((response) => {
    console.log('api 30',response,)
    if (response.status === 200) {
      console.log('Success:', response.data);

      return response.data
    } else if (response.status === 404) {
      return false
      console.log('Not Found:', response.statusText);
    } else if (response.status === 500) {
      console.log('Internal Server Error');
      return false
    } else {
      return false
    }
  })
  .catch((error) => {
    console.log(error)
    console.log(error.response.data);
    return error.response.data

  });
  
};

export const ApiGet = async (method,endpoint,token) => {
  const apiUrl = 'http://192.168.1.158:9000/v1'+endpoint;
  console.log(apiUrl)
  console.log(token)


  return axios.get(apiUrl,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    console.log('api 30',response,)
    if (response.status === 200) {
      console.log('Success:', response.data);

      return response.data
    } else if (response.status === 404) {
      return false
      console.log('Not Found:', response.statusText);
    } else if (response.status === 500) {
      console.log('Internal Server Error');
      return false
    } else {
      return false
    }
  })
  .catch((error) => {
    console.log(error.response.data);
    return error.response.data

  });
  
};