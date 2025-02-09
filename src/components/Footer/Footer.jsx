import React from "react";
import styles from "./Footer.module.css"

import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>© 2025 Scorpianails. <br/> Todos los derechos reservados</p>
      <div className={styles.txtContainer}>
        <a
          href="https://wa.me/541150625474"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaWhatsapp size={30} />
        </a>
        <a href="mailto:roabril.moire@gmail.com" className={styles.icon}>
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://www.instagram.com/_scorpianails_"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.tiktok.com/@_scorpianails_"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaTiktok size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
