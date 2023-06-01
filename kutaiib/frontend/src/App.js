import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import CatigoriesPage from "./pages/catigories";
import LibraryPage from "./pages/library";
import BookmarksPage from "./pages/bookmarks";
import AuthorsPage from "./pages/AuthorsPage";
import AboutUsPage from "./pages/AboutUs";
import ItemPage from "./pages/ItemPage";
import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />

      <Route path="/catigories" element={<CatigoriesPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path="/Authors" element={<AuthorsPage />} />

      <Route path="/about-us" element={<AboutUsPage />} />

      <Route path="/Item/:id" element={<ItemPage />} />
      <Route path="/Author/:id" element={<AuthorPage />} />
    </Routes>
  );
}

export default App;
