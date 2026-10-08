import React from "react";

function Product({ nom, prix, image }) {
  return (
    <div className="card">
      <img
        src={image}
        alt={nom}
        className="product-image"
      />

      <div className="card-content">
        <p className="product-name">
          {nom}
        </p>

        <p className="price">
          {prix} DH
        </p>

        <button className="cart-button">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default Product;

/* 

    const login = () => {
        const email = document.getElementById("email").value;

        if (listEmail.includes(email)) {
            alert("Login réussi");
        } else {
            alert("Email incorrect");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <input
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <button onClick={login}>
                Login
            </button>
        </div>
    );
}

export default Login; */