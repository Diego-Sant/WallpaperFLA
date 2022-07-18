import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as FlaFooter } from "../Assets/fla-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FlaFooter />
      <p>©WallpaperFLA. Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
