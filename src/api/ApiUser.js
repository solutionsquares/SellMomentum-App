//example api request: replace with your API request here in folder API
import Api from "./api"

export const getUser = (obj) => {
  console.log("obj")
  try {
    return Api.post("auth", JSON.stringify({
      "username": "admin",
      "password": "password123"
    }))
      .then((resp) => {
        return resp
      }).catch((error) => {
        console.log(error)
      })
  } catch (e) {
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
