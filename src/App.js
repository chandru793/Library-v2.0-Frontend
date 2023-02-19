import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import BackgroundAnimation from "./components/BackGroundAnimation";

//components
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import Home1 from "./components/Home1";
import Books from "./components/E-learning/Books";
import Summarize from "./components/Text-Analysis/Summarize";
import ArticleExtraction from "./components/Text-Analysis/ArticleExtraction";
import News from "./components/E-learning/News";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="bg">
        <BackgroundAnimation />
      </div>
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/books" element={<Books />} />
        <Route path="/news" element={<News />} />
        <Route path="/summarize" element={<Summarize />} />
        <Route path="/article-extraction" element={<ArticleExtraction />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
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
