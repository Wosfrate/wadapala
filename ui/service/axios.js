import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/getCities",

  // baseURL: "https://myschooly.herokuapp.com",
});

export default instance;
