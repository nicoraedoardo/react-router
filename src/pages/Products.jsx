import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento...</p>;

  return (
    <div>
      <h1>Prodotti</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
