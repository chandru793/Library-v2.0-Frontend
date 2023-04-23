import axios from "axios";

//================================
//=============Books==============
//api to get all the books
export const getAllBooks = async () =>
  await axios.get("http://localhost:8081/api/v2/library");

//=================================
//=============News================

//api to get all the news
export const getAllNews = async (category, country) =>
  await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7d0ee033081b4145b43934b3a545ed35`
  );

//================================
//=============jwt==============
//decode user token
export const decode = async (token) =>
  await axios.post(`http://localhost:8081/api/decode`, { token: token });
