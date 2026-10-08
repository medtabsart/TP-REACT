import React, { useState } from "react";

function Auth() {

    const cons = [
        {
            email: "admin@gmail.com",
            password: "1234"
        },
        {
            email: "test@gmail.com",
            password: "5678"
        },
        {
            email: "marwa@gmail.com",
            password: "0000"
        }
    ];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authentification = () => {

        const user = cons.find(
            (c) => c.email === email && c.password === password
        );

        if (user) {
            alert("Connecté avec succès");
        } else {
            alert("Email ou mot de passe incorrect");
        }
    };

    return (
        <div>
            <h1  >Authentification</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={authentification}>
                Connecter
            </button>
        </div>
    );
}

export default Auth;