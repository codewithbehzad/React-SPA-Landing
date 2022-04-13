import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

// import images
import Forex from "../images/Forex.jpg";
import Technical from "../images/Technical.png";
import Fundamental from "../images/Funda.png";
import Crypto from "../images/Crypto.webp";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, Image: Forex, name: "Forex package", cost: "500 $" },
        { id: 2, Image: Technical, name: "Technical package", cost: "300 $" },
        {
          id: 3,
          Image: Fundamental,
          name: "Fundamental package",
          cost: "200 $",
        },
        { id: 4, Image: Crypto, name: "Crypto package", cost: "600 $" },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => (
          <Card key={phone.id} image={phone.Image} name={phone.name} cost={phone.cost}/>))
          }
      </div>
    );
  }
} 

export default Cards;
