import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/authContext";
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthLoading } = useAuth();

  function handleAccountClick() {
    if (isAuthLoading) {
      return;
    }

    navigate(isAuthenticated ? "/account" : "/register");
  }

  
  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar-container">
        <NavLink className="navbar-brand" to="/">
          B2B Penguin Shop
        </NavLink>
              
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/"> {/*aria-current="page" href="/"*/}
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/"> {/*TODO:*/}
                Link
              </NavLink>
            </li>
          </ul>

          {/* Suchleiste */}
          <form className="navbar-search" role="search">
            <input
              className="navbar-search-input form-control"
              type="search"
              placeholder="Produkt, Artikelnummer, Hersteller, ..."
              aria-label="Search"
            />

            <button className="btn btn-success navbar-search-button" type="submit" aria-label="Suchen">
              <img 
                src="/img/search.svg"
                alt=""
                className="navbar-search-icon"
              />
            </button>
          </form>
        </div>

        {/* User-Account Icon */}
        <div className="navbar-user-area">
          <button
            type="button"
            className="btn btn-light border navbar-icon-button"
            onClick={handleAccountClick}
            to="/register"
            title={isAuthenticated ? "Mein Account" : "Anmelden"}
            aria-label={isAuthenticated ? "Accounteinstellungen" : "Zur Anmeldung"}
          >
            <img
              className="navbar-icon"
              src="/img/account-user-avatar.svg"
              alt=""
            />
          </button>

          <NavLink
            to="/cart"
            className="btn btn-light border navbar-icon-button"
            title="Warenkorb"
            aria-label="Warenkorb anzeigen"
          >
            <img
              src="/img/cart.png"
              alt=""
              className="navbar-icon"
            />
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;