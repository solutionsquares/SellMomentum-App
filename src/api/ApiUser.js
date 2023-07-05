//example api request: replace with your API request here in folder API
import {Api,ApiPostWithHeaderToken,Post,PostWithHeaderToken} from "./api"

export const getUser = (obj) => {
  try {
    return Post('post', "/seller/login", obj)
      .then((resp) => {
        console.log('POST', '/users',resp)
        return resp
      }).catch((error) => {
        console.log("Api User Error",error)
      })
  } catch (e) {
    console.log("e",e)
    return Promise.reject(e)
  }
}
export const logOutUser = (token) => {
  console.log("APi USer",token)
  try {
    return PostWithHeaderToken('post', "/seller/logout", token)
      .then((resp) => {
        console.log('POST', '/users',resp)
        return resp
      }).catch((error) => {
        console.log("Api User Error",error)
      })
  } catch (e) {
    console.log("e",e)
    return Promise.reject(e)
  }
}

export const genrateToken = (token) => {
  console.log("APi USer",token)
  try {
    return Post('post', "/seller/generate/access_token", token)
      .then((resp) => {
        console.log('POST', '/users',resp)
        return resp
      }).catch((error) => {
        console.log("Api User Error",error)
      })
  } catch (e) {
    console.log("e",e)
    return Promise.reject(e)
  }
}

export const registerUser = (obj) => {
  console.log('oooooo',obj)
  try {
    return Api('POST', "/seller/registration", obj)
      .then((resp) => {
        console.log('POST', '/users',resp)
        return resp
      }).catch((error) => {
        console.log("Api User Error",error)
      })
  } catch (e) {
    console.log("e",e)
    return Promise.reject(e)
  }
}
export const getAllList = (obj) => {
  console.log("getAllList Api")
  try {
    return Api("employees")
      .then((resp) => {
        return resp
      }).catch((error) => {
        console.log(error)
      })
  } catch (e) {
    return Promise.reject(e)
  }
}


module.exports = {
  getUser,
  registerUser,
  getAllList,
  genrateToken,
  logOutUser
}
