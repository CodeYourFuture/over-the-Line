import React, { useState } from "react";

import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { ArtistsPage } from "./components/ArtistsPage/ArtistsPage";
import { SingleArtistPage } from "./components/SingleArtistPage/SingleArtistPage";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  return (
    <>
      <HomePage />
      <ArtistsPage setCategories={setCategories} />
      <SingleArtistPage categories={categories} setCategory={setCategory} />
      <ProductsPage category={category} />
      <ProductPage />
    </>
  );
}
export default App;
