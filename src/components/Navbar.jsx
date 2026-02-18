import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/chi-siamo">Chi Siamo</Link> |{" "}
      <Link to="/prodotti">Prodotti</Link>
    </nav>
  );
}

export default Navbar;
