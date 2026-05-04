import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">
      <h1>Anmelden</h1>

      <form className="auth-form">
        <label>
          Email
          <input
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Passwort
          <input
            type="password"
            autoComplete="current-password"
            required
          />
        </label>

        <button className="btn btn-primary" type="submit">
          Anmelden
        </button>
      </form>

      <p>
          Noch kein Account? <Link to="/register">Registrieren</Link>
      </p>

    </main>
  );
}

export default Login;