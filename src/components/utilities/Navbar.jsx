import React, { useReducer, useEffect, useContext } from "react";
import { GlobalData } from "../../GlobalState";


import logo from "../assets/icons/logo.svg";
import redRing from "../assets/icons/redRing.svg";
import cart from "../assets/icons/cart.svg";

import menu from "../assets/icons/menu.svg";
import signin from "../assets/icons/signin.svg";
import signup from "../assets/icons/signup.svg";

import logoName from "../assets/icons/logoWhiteIcon.svg";

import Login from "./Login";
import Signup from "./Signup";
import ActivationUser from "./ActivationUser";

const Navbar = () => {

  const {rootState, rootDispatch} = useContext(GlobalData)

  const [navbarState, navbarDispatch] = useReducer(
    (navbarState, action) => {
      switch (action.case) {
        case "navbarFixed": return {navbarFixed : navbarState.navbarFixed = action.payload}
      
        default: return {...navbarState}
      }
    },{
      navbarFixed: false
    }
  )

  // effect is here
  useEffect(() => {
    if (window.location.pathname) {
      rootDispatch({case : "routerActive", payload: window.location.pathname})
    }
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        navbarDispatch({ case: "navbarFixed", payload: true });
      } else {
        navbarDispatch({ case: "navbarFixed", payload: false });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rootDispatch]);
  // create tooltip
  const createTooltip = (payload) => {
    return <div className="tooltip">{payload}</div>;
  };
  // routers is here
  const routers = () => {
    return (
      <div className="routers">
        <div className="router">
          <button
            style={{ position: "relative" }}
            onMouseEnter={() =>
              rootDispatch({ case: "tooltip", payload: "products" })
            }
            onMouseLeave={() =>
              rootDispatch({ case: "tooltip", payload: "" })
            }
            onClick={() => (window.location = "/products")}
            className={
              rootState.routerActive === "/products"
                ? `routerActive cursorpointer`
                : `  cursorpointer`
            }
          >
            <img src={redRing} alt="redRing" width={15} />
            {rootState.tooltip === "products" && createTooltip(rootState.tooltip)}
            Products
          </button>
        </div>
        <div className="router">
          <button
            style={{ position: "relative" }}
            onMouseEnter={() =>
              rootDispatch({ case: "tooltip", payload: "contact" })
            }
            onMouseLeave={() =>
              rootDispatch({ case: "tooltip", payload: "" })
            }
            onClick={() => (window.location = "/contact")}
            className={
              rootState.routerActive === "/contact"
                ? `routerActive cursorpointer`
                : ` cursorpointer `
            }
          >
            <img src={redRing} alt="redRing" width={15} />
            {rootState.tooltip === "contact" && createTooltip(rootState.tooltip)}
            Contact
          </button>
        </div>
        <div className="router">
          <button
            style={{ position: "relative" }}
            onMouseEnter={() =>
              rootDispatch({ case: "tooltip", payload: "more info" })
            }
            onMouseLeave={() =>
              rootDispatch({ case: "tooltip", payload: "" })
            }
            onClick={() => (window.location = "/moreinfo")}
            className={
              rootState.routerActive === "/moreinfo"
                ? `routerActive cursorpointer`
                : ` cursorpointer `
            }
          >
            <img src={redRing} alt="redRing" width={15} />
            {rootState.tooltip === "more info" && createTooltip(rootState.tooltip)}
            More Info
          </button>
        </div>
      </div>
    );
  };
  // some assets
  const assets = {
    menuRouter: () => {
      return (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootDispatch({ case: "tooltip", payload: "menu" })
          }
          onMouseLeave={() =>
            rootDispatch({ case: "tooltip", payload: "" })
          }
          className="menu cursorpointer"
        >
          {rootState.tooltip === "menu" && createTooltip(rootState.tooltip)}
          <img
            src={menu}
            alt="menu"
            onClick={() => {
              rootDispatch({ case: "expandRouter", payload: true });
            }}
          />
        </div>
      );
    },
    logoRouter: () => {
      return (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootDispatch({ case: "tooltip", payload: "home" })
          }
          onMouseLeave={() =>
            rootDispatch({ case: "tooltip", payload: "" })
          }
          className="logo cursorpointer"
        >
          {rootState.tooltip === "home" && createTooltip(rootState.tooltip)}
          <img src={logo} alt="logo" onClick={() => (window.location = "/")} />
        </div>
      );
    },
    cartRouter: () => {
      return (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootDispatch({ case: "tooltip", payload: "cart" })
          }
          onMouseLeave={() =>
            rootDispatch({ case: "tooltip", payload: "" })
          }
          className="cart cursorpointer"
          onClick={() => {
            rootDispatch({ case: "expandShopingCart", payload: true });
          }}
        >
          {rootState.tooltip === "cart" && createTooltip(rootState.tooltip)}
          <img src={cart} alt="cart" />
          <span>6</span>
        </div>
      );
    },
    signupRouter: () => {
      return (
        <button
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootDispatch({ case: "tooltip", payload: "daftar" })
          }
          onMouseLeave={() =>
            rootDispatch({ case: "tooltip", payload: "" })
          }
          className="daftar cursorpointer"
          onClick={() =>
            rootDispatch({ case: "windowOpen", payload: "signup" })
          }
        >
          {rootState.tooltip === "daftar" && createTooltip(rootState.tooltip)}
          Daftar
        </button>
      );
    },
    loginRouter: () => {
      return (
        <button
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootDispatch({ case: "tooltip", payload: "masuk" })
          }
          onMouseLeave={() =>
            rootDispatch({ case: "tooltip", payload: "" })
          }
          className="masuk cursorpointer"
          onClick={() =>
            rootDispatch({ case: "windowOpen", payload: "login" })
          }
        >
          {rootState.tooltip === "masuk" && createTooltip(rootState.tooltip)}
          Masuk
        </button>
      );
    },
    signupIconRouter: () => {
      return (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootDispatch({ case: "tooltip", payload: "iconDaftar" })
          }
          onMouseLeave={() =>
            rootDispatch({ case: "tooltip", payload: "" })
          }
          className="signupIcon cursorpointer"
        >
          {rootState.tooltip === "iconDaftar" && createTooltip("daftar")}
          <img
            src={signup}
            alt="signup"
            onClick={() =>
              rootDispatch({ case: "windowOpen", payload: "signup" })
            }
          />
        </div>
      );
    },
    loginIconRouter: () => {
      return (
        <div
          style={{ position: "relative" }}
          onMouseEnter={() =>
            rootState({ case: "createTooltip", payload: "iconMasuk" })
          }
          onMouseLeave={() =>
            rootState({ case: "createTooltip", payload: "" })
          }
          className="loginIcon cursorpointer"
        >
          {rootState.tooltip === "iconMasuk" && createTooltip("masuk")}
          <img
            src={signin}
            alt="signin"
            onClick={() =>
              rootState({ case: "windowOpen", payload: "login" })
            }
          />
        </div>
      );
    }
  };
  // expands


  //  ============================================= edit sampai sini 


  const routerExpand = () => {
    return (
      <div className={rootState.expandRouter ? `routerExpand` : "routerHide"}>
        <div className="routerExpandContentWrapper">
          <div className="logoName cursorpointer">
            <img
              src={logoName}
              alt="logoName"
              onClick={() => (window.location = "/masuk")}
            />
          </div>
          <div className="horisontalLine"></div>
        </div>
        <div
          className="routerExpandSide"
          onClick={() =>
            rootState.expandRouter === true &&
            rootDispatch({ case: "expandRouter", payload: false })
          }
        ></div>
      </div>
    );
  };
  const cartExpand = () => {
    return (
      <div
        className={rootState.expandShopingCart ? `cartExpand` : `cartExpandHide`}
      >
        <div
          className="cartExpandSide"
          onMouseDown={() =>
            rootState.expandShopingCart === true &&
            rootDispatch({ case: "expandShopingCart", payload: false })
          }
        ></div>
        <div className="cartExpandContentWrapper">
          Shopping cart
          <div className=""></div>
          <div className="horisontalLine"></div>
        </div>
      </div>
    );
  };
  // main component
  return (
    <>
      {routerExpand()}

      {rootState.windowOpen === "login" && ( <Login /> )}
      {rootState.windowOpen === "signup" && ( <Signup/> )}
      {rootState.windowOpen === "activationUser" && (<ActivationUser/>)}

      <div className={navbarState.navbarFixed ? `navbar fixed` : `navbar`}>
        <div className="small__navbar__wrapper page__start">
          {assets.menuRouter()}
          {assets.logoRouter()}
          {assets.cartRouter()}
        </div>

        <div className="large__navbar__wrapper page__start">
          {assets.logoRouter()}
          {routers()}
          <div className="buttons">
            {assets.signupRouter()}
            {assets.loginRouter()}
            {assets.cartRouter()}
          </div>
          <div className="buttonsSmallDevice">
            {assets.signupIconRouter()}
            {assets.loginIconRouter()}
            {assets.cartRouter()}
          </div>

          {assets.menuRouter()}
        </div>
      </div>

      {cartExpand()}
    </>
  );
};

export default Navbar;
