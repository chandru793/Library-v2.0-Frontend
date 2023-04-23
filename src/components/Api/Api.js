import axios from "axios";

//================================
//=============Books==============
//api to get all the books
export const getAllBooks = async () =>
  await axios.get("http://localhost:8081/api/v2/library");

export const googlebooks = async () =>
  await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
  );

//=================================
//=============News================

//api to get all the news
export const getAllNews = async (category, country) =>
  await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}`
  );

//================================
//=============jwt==============
//decode user token
export const decode = async (token) =>
  await axios.post(`http://localhost:8081/api/decode`, { token: token });
