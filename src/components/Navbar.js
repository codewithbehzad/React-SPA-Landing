import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.navbarItems}>
        <ul className={styles.navList}>
          <li className={styles.navItems}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItems}>
            <Link to="/">About</Link>
          </li>
          <li className={styles.navItems}>
            <Link to="/">Contact</Link>
          </li>
          <li className={styles.navItems}>
            <Link to="/">Blog</Link>
          </li>
          <li className={styles.navItems}>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.nav__toggler}>
        <div className={`${styles.bar} ${styles.barOne}`}></div>
        <div className={`${styles.bar} ${styles.barTwo}`}></div>
        <div className={`${styles.bar} ${styles.barThree}`}></div>
      </div>
      <button className={styles.btnInvite}>Request invite</button>
    </header>
  );
};

export default Navbar;
