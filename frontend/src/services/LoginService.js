import http from "../http-common";

const login = username => {
  return http.get(`/users/${username}`);
};

export default {
  login
};