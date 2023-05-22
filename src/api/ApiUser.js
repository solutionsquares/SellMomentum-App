//example api request: replace with your API request here in folder API
import Api from "./api"

export const getUser = (obj) => {
  console.log("obj 1",obj)
  try {
    return Api.post("/user/login", JSON.stringify(obj))
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

export const getAllList = (obj) => {
  console.log("getAllList Api")
  try {
    return Api.get("employees")
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
  getAllList
}
