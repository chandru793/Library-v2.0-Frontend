import axios from "axios";

//================================
//=============Books==============
//api to get all the books
export const getAllBooks = async () =>
  await axios.get("http://localhost:8081/api/v2/library");

//=================================
//=============News================

//api key
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

//api to get all the news
export const getAllNews = async (category) =>
  await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7d0ee033081b4145b43934b3a545ed35`
  );
