import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Summarize from "./components/Summarize.jsx";
import ArticleExtraction from "./components/ArticleExtraction";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
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
