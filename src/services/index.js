import Axios from "axios";

// TODO membuat root url
const RootPath = "http://localhost:5000";

// TODO buat function Get
const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    Axios.get(`${RootPath}/${path}`)
      .then((res) => {
        return resolve(res.data)
      }, (err) => {
        reject(err)
      })

  })

  return promise
}

const getNewsBlog = () => Get("posts?_sort=id&_order=desc");

const API = {
  getNewsBlog
}

export default API