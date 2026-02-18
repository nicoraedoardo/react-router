import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/prodotti" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
