import React from "react";
import styles from "./Footer.module.css";
import Facebook from "../images/icon-facebook.svg";
import Youtube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.contact}>
            <div className={styles.social}>
              <img src={Facebook} alt="facebook" />
              <img src={Youtube} alt="youtube" />
              <img src={Twitter} alt="twitter" />
              <img src={Pinterest} alt="pinterest" />
              <img src={Instagram} alt="instagram" />
            </div>
          </div>
          <div className={styles.footerLinks}>
            <ul className={styles.linkOne}>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
            <ul className={styles.linkTwo}>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Support</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className={styles.footerLast}>
            <button className={styles.primaryBtn}>Request Invite</button>
            <p className={styles.copyright}>
              © Develop by: Hossein Behzad
              <br />
              <span> All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
