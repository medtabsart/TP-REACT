/* export default function Voiture({voiture}) {
  return (
    <div>
      <h1  style={{ color: "green" }} >Information voiture</h1>

      <p>
        voiture matricule:
        <span style={{ color: "BLUE" }}>
          {voiture.matricule}
        </span>
      </p>

      <p>
        marque: {voiture.marque}
      </p>

      <p
       style={{
          color: voiture.nombreDeChevaux < 6 ? "blue" : "red"
        }}
        >
        
        nombre de chevaux: {voiture.nombreDeChevaux}
      </p>
    </div>
  );
} */


import React, { Component } from "react";

export default class Voiture extends Component {
  render() {
    const { voiture } = this.props;

    return (
      <div>
        <h1 style={{ color: "green" }}>
          Information voiture
        </h1>

        <p>
          voiture matricule:
          <span style={{ color: "blue" }}>
            {voiture.matricule}
          </span>
        </p>

        <p>
          marque: {voiture.marque}
        </p>

        <p
          style={{
            color: voiture.nombreDeChevaux < 6 ? "blue" : "red"
          }}
        >
          nombre de chevaux: {voiture.nombreDeChevaux}
        </p>
      </div>
    );
  }
}