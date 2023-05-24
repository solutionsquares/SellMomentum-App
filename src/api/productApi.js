//example api request: replace with your API request here in folder API
import Api from "./api"

export const getSellerProduct = (id) => {
  console.log("obj 1",id)
  try {
    return Api.get("/product/products_list_seller/"+id)
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

module.exports = {
  getSellerProduct,
}
