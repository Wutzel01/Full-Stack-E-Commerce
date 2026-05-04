import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext";


function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            await register(email, password);
            navigate("/account");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="auth-page">
            <h1>Registrieren</h1>

            <form className="auth-form" onSubmit={handleSubmit}>
              {error && <p className="auth-error">{error}</p>}

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Passwort
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>

              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Registrieren..." : "Account erstellen"}
              </button>
            </form>

            <p>
                Bereits registriert? <Link to="/login">Anmelden</Link>
            </p>

        </main>
    );
}

export default Register;