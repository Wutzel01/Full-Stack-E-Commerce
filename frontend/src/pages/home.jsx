/*import { useNavigate } from "react-router-dom";*/
import Product from "../components/product";
import { useCart } from "../context/cartContext";

const products = [
  {
    id: "penguin-fredderik",
    image: "penguin_fredderik.jpg",
    title: "Fredderik",
    description: "Ahoi!",
    price: 39.99,
  },
  {
    id: "penguin-sebastian",
    image: "penguin_sebastian.jpg",
    title: "Sebastian",
    description: "Grrr",
    price: 44.49,
  },
  {
    id: "penguin-tzwen",
    image: "penguin_tzwen.jpg",
    title: "Tzwen",
    description: "Platsch Platsch",
    price: 34.99,
  },
]


function Home() {
  /*const navigate = useNavigate();*/
  const { addItem } = useCart();
  
  function handleAddToCart(product) {
    addItem(product);
    /*navigate("/cart");*/
  }

  return (
    <main className="page">
      <section className="shop-intro">
        <p className="account-title">Pinguin Shop</p>
        <h1>Wähle deinen Pinguin</h1>
      </section>

      <section className="product-container" aria-label="Produkte">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </section>      
      
    
    </main>
  );
}

export default Home;