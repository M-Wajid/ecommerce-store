import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as MainLogo} from "../../assets/logo.svg";
import "./navigation.styles.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <div>
            <MainLogo />
          </div>
        </Link>
        <div className="navigation-links-container">
          <Link className="navigation-bar-link" to="/shop">
            SHOP
          </Link>
          <Link className="navigation-bar-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
