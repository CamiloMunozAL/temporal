import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Fragment } from "react";
import SearchBar from "./components/SearchBar";

let movieExample = {
  title: "The Dark Knight",
  year: 2008,
  director: "Christopher Nolan",
  description:
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  img: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
};

function App() {
  return (
    <>
      <h3>cambio ramanuevamain</h3>
      <h3>cambio en main</h3>
      <SearchBar />
    </>
  );
}

export default App;
