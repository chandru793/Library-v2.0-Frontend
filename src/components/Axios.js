import axios from "axios";

//api to get all the books
export const getAllBooks = async () =>
    await axios.get("http://localhost:8080/api/v2/library");