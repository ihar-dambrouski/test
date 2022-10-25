import axios from "axios";

const TestAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

TestAxios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

TestAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(
      error?.response?.data?.message ||
        error?.response?.statusText ||
        "Something went wrong"
    );
  }
);

export default TestAxios;
