//example api request: replace with your API request here in folder API
import {ApiGet,PostWithHeaderToken,GetWithHeaderToken} from "./api"


export const getSellerProduct = (token) => {
  console.log("obj 1",token)
  try {
    return GetWithHeaderToken("get","/product/list/",token)
      .then((resp) => {
        return resp
      }).catch((error) => {
        console.log(error)
      })
  } catch (e) {
    console.log("e",e)
    return Promise.reject(e)
  }
}

export const getCategories = (token) => {
  console.log("obj 2")
  try {
    return GetWithHeaderToken("get","/category/list",token)
      .then((resp) => {
        return resp
      }).catch((error) => {
        console.log(error)
      })
  } catch (e) {
    console.log("e",e)
    return Promise.reject(e)
  }
}

export const addProducts = (data,token) =>{
  console.log(data)
  try {
    return PostWithHeaderToken('post', "/product/add",data,token)
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
module.exports = {
  getSellerProduct,
  getCategories,
  addProducts
}
