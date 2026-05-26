function Product({ product, image, title, description, price, onAddToCart }) {
  const productData = product || {
    id: title?.toLowerCase() || "produkt",
    image,
    title,
    description,
    price: price || 0,
  };

  return (
    <article className="card product-card">
      <img src={"/img/" + productData.image} className="card-img-top" alt={productData.title} />

      <div className="card-body product-card-body">
        <h5 className="card-title">{productData.title}</h5>
        <p className="card-text">{productData.description}</p>
        <p className="product-price">
          {productData.price.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
        <button className="btn btn-primary" type="button" onClick={() => onAddToCart(productData)}>
          Adoptieren
        </button>
        

      </div>
    </article>
  )

}

{/*class Product extends Component 
{
    state = { }
    render() 
    {
        return <div className="card" styles={{width: '18rem'}}>
        <img src={"/img/" + this.props.image} className="card-img-top" alt={this.props.title} />
        <div >
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href="/cart" className="btn btn-primary">
            Adoptieren
          </a>      
        </div>    
      </div>;
    }
}*/}

export default Product;