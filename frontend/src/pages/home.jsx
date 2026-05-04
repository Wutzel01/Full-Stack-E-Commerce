import Product from "../components/product";

function Home() {
  return (
    <main className="page product-container">
      <Product image="penguin_fredderik.jpg" title="Fredderik" description="Ahoi!"/>
      <Product image="penguin_sebastian.jpg" title="Sebastian" description="Grrr"/>
      <Product image="penguin_tzwen.jpg" title="Tzwen" description="Platsch Platsch"/>
    
    </main>
  );
}

export default Home;