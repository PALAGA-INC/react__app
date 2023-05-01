import React, { useContext } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { GlobalData } from "../GlobalState";
import Home from "./pages/Home";
import Navbar from "./utilities/Navbar";

const Controllers = () => {
  const { rootState, rootDispatch } = useContext(GlobalData);

  // const data = useContext(GlobalData)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Controllers;

