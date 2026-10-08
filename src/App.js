/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/* import Voiture from "./Voiture";

function App() {
  const myVoiture = {
    matricule: "1987X9",
    marque: "Toyota",
    nombreDeChevaux: 6
  };

  return (
    <Voiture voiture={myVoiture} />
  );
}

export default App;  */

/* 
import "./App.css";

const produits = [
  {
    id: 1,
    nom: "PC Portable Gamer HP VICTUS 7490 DH",
    prix: 7490,
    image: "",
  },
  {
    id: 2,
    nom: "PC Portable Gamer HP VITUS 2190 DH",
    prix: 2190,
    image: "",
  },
  {
    id: 3,
    nom: "Pc Portable Chromebook Acer 3640 DH",
    prix: 3640,
    image: "",
  },
  {
    id: 4,
    nom: "PC Portable - HUAWEI",
    prix: 1270,
    image: "",
  },
];

function Produit({ produit }) {
  return (
    <div className="card">
      <img
        src={produit.image}
        alt={produit.nom}
        className="product-image"
      />

      <div className="card-content">
        <p className="product-name">{produit.nom}</p>

        <p className="price">{produit.prix} DH</p>

        <button className="cart-button">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="container">
      <h1>Ordinateurs portables</h1>

      <div className="products">
        {produits.map((produit) => (
          <Produit
            key={produit.id}
            produit={produit}
          />
        ))}
      </div>
    </main>
  );
}

export default App; */

/* import Login from "./Login";

function App() {
    return (
        <div>
            <Login />
        </div>
    );
}

export default App; */

import Auth from "./Auth";

function App() {
    return (
        <div>
            <Auth />
        </div>
    );
}

export default App;