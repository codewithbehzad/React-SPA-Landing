import React, { Component } from "react";
import styles from "./Card.module.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  minuetsHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  plusHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="Images" />
        <h3>{name}</h3>
        <p>
          {cost}
          {counter
            ? ` * ${counter} = ${counter * Number(cost.split(" ")[0])} $`
            : ""}
        </p>
        <div className={styles.counter}>
          <div className={styles.wrapper}>
            <i className="fa-solid fa-minus" onClick={this.minuetsHandler}></i>
            <span>{counter}</span>
            <i className="fa-solid fa-plus" onClick={this.plusHandler}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
