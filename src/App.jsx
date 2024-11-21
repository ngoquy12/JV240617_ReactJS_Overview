import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListUser from "./components/ListUser";
import ListProduct from "./components/ListProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ListUser />
      <ListProduct />

      <Footer />
    </>
  );
}

export default App;
