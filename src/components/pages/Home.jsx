import React from "react";
import Background from "../utilities/Background";
import rightBanner from "../assets/images/rightBanner.svg";
import logoName from "../assets/images/logoName.svg";
import altLogoName from "../assets/images/altLogoName.svg";

const Home = () => {
  const banner = () => {
    return (
      <>
        <div className="left__banner">

          <img src={altLogoName} alt="altLogoName" className="alt__logo__name" />
          <img src={logoName} alt="logoName" className="logo__name" />
          <p>Digital & Offset Printing Sejak 2016</p>
          <button
            className="cursorpointer"
            onClick={() => {
              window.location = "/products";
            }}
          >
            Explore Products
          </button>
        </div>
        <img src={rightBanner} alt="rightBanner" className="right__banner" />
      </>
    );
  };


  return (
    <div className="home page__start">
      <Background />
      {banner()}
      <div className="border__products">
        <p>Best Saller</p>
      </div>
    </div>
  );
};

export default Home;
