import React, { useContext, useReducer } from "react";
import logo from "../assets/icons/logo.svg";
import openEye from "../assets/icons/openEye.svg";
import closeEye from "../assets/icons/closeEye.svg";
import { GlobalData } from "../../GlobalState";
// import cornerBox from "../assets/icons/cornerBox.svg";
// import extrabg from "../assets/images/extrabg.png";

const Login = () => {


  const {rootDispatch} = useContext(GlobalData)
  const [loginState, loginDispatch] = useReducer(
    (loginState, action) => {
      switch (action.type) {
        case "eyes": return { eyes: (loginState.eyes = action.payload), ...loginState}

        default: return loginState;
      }
    },
    {
    eyes: false,
    }
  );

  return (
    <div className="login">
      <div className="area__login" >
        <div className="login__wrapper">

          <div className="strip__top"></div>
          <img src={logo} width={50} alt="" className="login__logo" />
          <p>MASUK</p>
          <div className="number__login__section">
            <label>*whatsapp number</label>
            <div className="country__code"> +62 </div>
            <input type="text" placeholder="Contoh “85245674567”" />
          </div>
          <div className="password__login__section">
            <label>*password</label>
            <input
              type={loginState.eyes ? "text" : "password"}
              placeholder="Contoh “IniRahasia1234#”"
            />
            <i
              onClick={() =>
                loginDispatch({ case: "eyes", payload: !loginState.eyes })
              }
            >
              {loginState.eyes ? (
                <img src={closeEye} alt="openEye" width={18.24} />
              ) : (
                <img src={openEye} alt="openEye" width={18.24} />
              )}
            </i>
          </div>
          <div className="submit__section">
            <div className="account__service">
              <div className="lupa__password cursorpointer">Lupa Password?</div>
              <div className="belum__punya__akun">
                Belum Punya Akun ?<span onClick={() => rootDispatch({case: "windowOpen", payload: "signup"})}>Daftar</span>
              </div>
            </div>
            <button>Masuk</button>
          </div>
        </div>
      </div>
      <div
        onClick={() => rootDispatch({ case: "windowOpen", payload: "" })}
        className="area__click"
      >
        {/* <img src={extrabg} alt="extrabg" /> */}
      </div>
    </div>
  );
};

export default Login;
