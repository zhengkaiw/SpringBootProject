import http from "../http-common";

const create = data => {
  return http.post(`/register`, data);
};

export default {
  create
};