import Axios from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config: {
  headers: { token: string; Accept: string };
}) {
  const token = Cookies.get("musc-admin-token");
  if (token) {
    config.headers.token = token;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor as never);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.message === "jwt expired") {
      Cookies.remove("musc-admin-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
