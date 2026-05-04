import { Link } from "react-router-dom"



function Register() {
  return (
    <main className="auth-page">
        <h1>Registrieren</h1>

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
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Registrieren
          </button>
        </form>

        <p>
            Bereits registriert? <Link to="/login">Anmelden</Link>
        </p>

    </main>
    );
}

export default Register;