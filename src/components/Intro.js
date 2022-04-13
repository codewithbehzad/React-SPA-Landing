import React, { Component } from "react";
import styles from "./Intro.module.css";
import heroBg1 from "../images/bg-intro-mobile.svg";
import heroBg2 from "../images/image-mockups.png";

class Intro extends Component {
  render() {
    return (
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.title}>
            <h1>
              Next generation <br /> banking
            </h1>
            <p>
              Take your financial life online. Your Easybank account
              <br />
               will be a one-stop-shop for spending, saving,
              <br />
               budgeting, investing, and much more.
            </p>
            <button className={styles.btnIntro}>Request invite</button>
          </div>
          <div className={styles.heroImage}>
            <img className={styles.bgOne} src={heroBg1} alt="hero-bg" />
            <img className={styles.bgTwo} src={heroBg2} alt="hero-bg" />
          </div>
        </div>
      </main>
    );
  }
}

export default Intro;
