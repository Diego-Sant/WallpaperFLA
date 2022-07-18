import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as FlamengoFotos } from "../../Assets/feed.svg";
import { ReactComponent as FlamengoStats } from "../../Assets/estatisticas.svg";
import { ReactComponent as FlamengoAdd } from "../../Assets/adicionar.svg";
import { ReactComponent as FlamengoSair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu &&
            styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu &&
          styles.navMobileActive}`}
      >
        <NavLink to="/conta" end>
          <FlamengoFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/postar">
          <FlamengoAdd />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <FlamengoSair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
