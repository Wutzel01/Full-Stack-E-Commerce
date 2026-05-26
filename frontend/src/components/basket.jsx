import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";


function Basket() {
  const {
    items,
    totalQuantity,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="cart-card empty-cart">
        <h1>Warenkorb</h1>
        <p>Dein Warenkorb ist noch leer.</p>
        <Link className="btn btn-primary" to="/">
          Pinguine ansehen
        </Link>
      </section>
    );
  }


  return (
    <section className="cart-layout" aria-label="Warenkorb">
      <div className="cart-card">
        <div className="account-card-header">
          <div>
            <p className="account-title">Warenkorb</p>
            <h1>Deine Auswahl</h1>
          </div>
          <span className="account-badge">{totalQuantity} Artikel</span>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={"/img/" + item.image} alt={item.title} />
              

              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <span>
                  {item.price.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
              </div>

              <div className="quantity-control" aria-label={`Menge für ${item.title}`}>
                <button type="button" onClick={() => decreaseQuantity(item.id)} aria-label="Menge verringern">
                  −
                </button>
                <strong>{item.quantity}</strong>
                <button type="button" onClick={() => increaseQuantity(item.id)} aria-label="Menge erhöhen">
                  +
                </button>
              </div>

              <strong className="cart-item-total">
                {(item.price * item.quantity).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </strong>

              <button className="btn btn-outline-danger" type="button" onClick={() => removeItem(item.id)}>
                Entfernen
              </button>
            </article>
          ))}
        </div>
      </div>

      <aside className="cart-card cart-summary">
        <h2>Bestellübersicht</h2>
        <div className="summary-row">
          <span>Artikel</span>
          <strong>{totalQuantity}</strong>
        </div>
        <div className="summary-row total">
          <span>Gesamt</span>
          <strong>
            {totalPrice.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </strong>
        </div>
        <button className="btn btn-success" type="button">
          Zur Kasse
        </button>
        <button className="btn btn-outline-secondary" type="button" onClick={clearCart}>
          Warenkorb leeren
        </button>
      </aside>
    </section>

  );
}
 
export default Basket;