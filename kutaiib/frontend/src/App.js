import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import CatigoriesPage from "./pages/catigories";
import LibraryPage from "./pages/library";
import BookmarksPage from "./pages/bookmarks";
import AboutUsPage from "./pages/AboutUs";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/");
    let data = await response.json();
    setData(data);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />

      <Route path="/catigories" element={<CatigoriesPage />} />
      <Route path="/library" element={<LibraryPage data={Data} />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />

      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
