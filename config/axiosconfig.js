import axios from "axios"

export const http = new Axios.create({
    baseURL: "http://localhost:9090/",
  });