import React from "react";
import styles from "./Logos.module.css";

import Vue from "../images/vuejs.png";
import ReactJs from "../images/react.png";
import Angular from "../images/Angular.png";

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Choose your favorite Tools !</h3>
      <div>
        <img src={Vue} alt="Vue js" />
        <img src={ReactJs} alt="React js" />
        <img src={Angular} alt="Angular js" />
      </div>
    </div>
  );
};

export default Logos;
