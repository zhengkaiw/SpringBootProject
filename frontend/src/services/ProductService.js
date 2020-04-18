import http from "../http-common";

const getAll = () => {
  return http.get(`/products`);
}

const getSortByAuthor = () => {
  return http.get(`/products/sortByAuthor`);
}

const getSortByTitle = () => {
  return http.get(`/products/sortByTitle`);
}

const getSortByBookRating = () => {
  return http.get(`/products/sortByBookRating`);
}

const getSortByTopSellers = () => {
  return http.get(`/products/sortByTopSellers`);
}

const getSortByReleaseDate = () => {
  return http.get(`/products/sortByReleaseDate`);
}

const getSortByPrice = () => {
  return http.get(`/products/sortByPrice`);
}

export default {
  getAll,
  getSortByAuthor,
  getSortByTitle,
  getSortByBookRating,
  getSortByPrice,
  getSortByTopSellers,
  getSortByReleaseDate
};