import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  // Legge l'id dalla URL
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary"></div>
        <p>Caricamento prodotto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5">
        <p>Prodotto non trovato</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Link to="/prodotti" className="btn btn-secondary mb-4">
        ← Torna ai prodotti
      </Link>

      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">Categoria: {product.category}</p>
          <p>{product.description}</p>
          <h4 className="text-primary">{product.price} €</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
