import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import BackgroundAnimation from "./components/BackGroundAnimation";

//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Summarize from "./components/Summarize.jsx";
import ArticleExtraction from "./components/ArticleExtraction";
import Home1 from "./components/Home1";
import Books from "./components/Books";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="bg">
        <BackgroundAnimation />
      </div>
      {/* <BackgroundAnimation/> */}
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/summarize" element={<Summarize />} />
        <Route path="/article-extraction" element={<ArticleExtraction />} />
      </Routes>

      {/* Toast  */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
