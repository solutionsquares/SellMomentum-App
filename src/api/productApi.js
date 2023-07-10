//example api request: replace with your API request here in folder API
import {PatchtWithHeaderToken,PostWithHeaderToken,GetWithHeaderToken,DeleteWithHeaderToken} from "./api"


export const getSellerProduct = (data,sellerId) => {
  console.log("obj 1",data)

  try {
    return GetWithHeaderToken("get","/product/products_list_seller/"+data.sellerId+"",data.userToken)
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
export const updateProducts = (data,id,token) =>{
  console.log(data)
  try {
    return PatchtWithHeaderToken('patch', "/product/update/"+id+"",data,token)
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
export const deleteProduct = (data,token) =>{
  console.log(data)
  console.log(token)

  try {
    return DeleteWithHeaderToken('delete', "/product/delete/"+data+"",token)
      .then((resp) => {
        console.log('DeleteWithHeaderToken', '/DeleteWithHeaderToken',resp)
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
  addProducts,
  updateProducts,
  deleteProduct,
}
