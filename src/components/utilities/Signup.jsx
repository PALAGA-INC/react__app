import React, { useContext, useRef } from "react";
import { GlobalData } from "../../GlobalState";
import axios from "axios";

import { Input, ArrowLeft, Buttons, Notification, AreaClickable } from "./Assets";

import logo from "../assets/icons/logo.svg";
import openEye from "../assets/icons/openEye.svg";
import closeEye from "../assets/icons/closeEye.svg";
import info from "../assets/icons/info.svg";

const Signup = () => {
  
  const { rootState, rootDispatch } = useContext(GlobalData);

  const usernameRef = useRef(null);
  const numberRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    rootDispatch({ case: "loading", payload: true });

    try {
      const res = await axios.post("/api/user/sendVerification", {
        username: usernameRef.current.value,
        number: parseInt(numberRef.current.value),
        password: passwordRef.current.value,
      });
      if (res.status === 200) {
        rootDispatch({ case: "notification", payload: res.data.msg });
        usernameRef.current.value = "";
        numberRef.current.value = "";
        passwordRef.current.value = "";
        rootDispatch({ case: "loading", payload: false });
        rootDispatch({ case: "windowOpen", payload: "activationUser" });
      } else {
        rootDispatch({ case: "notification", payload: res.data.msg });
        rootDispatch({ case: "loading", payload: false });
      }
    } catch (err) {
      rootDispatch({ case: "notification", payload: err.response.data.msg });
      rootDispatch({ case: "loading", payload: false });
    }
  }

  return (
    <div className="signup">
      <div className="area__signup">
        <ArrowLeft />
        <div className="signup__wrapper">
          <div className="strip__top"></div>
          <img src={logo} width={50} alt="" className="login__logo" />
          <p>DAFTAR</p>

          <div className="section__wrapper">

            <Input
              Class={rootState.notification === "user ini telah terdaftar, silahkan Login !" ? "alert" : " "}
              Ref={usernameRef}
              Name={"username"}
              Type={"text"}
              Event={() => rootDispatch({ case: "notification", payload: "" })}
            />
            <i>
            {rootState.notification === "user ini telah terdaftar, silahkan Login !" && <Notification txt={rootState.notification}/>}
            {rootState.notification === "user ini telah terdaftar, silahkan Login !" && (<img src={info} alt="info" width={18.24}/>) }
            </i>
          
          </div>

          <div className="section__wrapper number__signup__section">
            <div className="country__code">+62</div>
            <Input                              
              Ref={numberRef}
              Name={"number"}
              Type={"text"}
              Event={() => rootDispatch({ case: "notification", payload: "" })}
            />
          </div>

          <div className="section__wrapper">

          <Input  Class={rootState.notification === "min 8 karakter, min 1 huruf kapital, min 1 tanda baca, min 1 angka" ? "alert" : " "}
                  Ref={passwordRef}
                  Name={"password"}
                  Type={rootState.eyes ? "text" : "password"}
                  Event={() => rootDispatch({ case: "notification", payload: "" })}
                />
            <i onClick={() => rootDispatch({ case: "eyes", payload: !rootState.eyes })}> 
            {rootState.notification === "min 8 karakter, min 1 huruf kapital, min 1 tanda baca, min 1 angka" && <Notification txt={rootState.notification}/>}
            {
              rootState.notification === "min 8 karakter, min 1 huruf kapital, min 1 tanda baca, min 1 angka" ? <img className="info" src={info} alt="info" width={18.24} /> 
              : rootState.eyes === true ?  <img src={closeEye} alt="closeEye" width={18.24} />
              : rootState.eyes === false ? <img src={openEye} alt="openEye" width={18.24} />
              : " "
            }
            </i>

          </div>

          <div className="submit__section">
            <div className="account__service">
              <div className="kirim__ulang">Verifikasi Ulang ?</div>
              <div className="sudah__punya__akun">
                {" "}
                Sudah Punya Akun ?
                <span
                  onClick={() =>
                    rootDispatch({ case: "windowOpen", payload: "login" })
                  }
                >
                  {" "}
                  Masuk{" "}
                </span>
              </div>
            </div>
            <Buttons OnClick={handleSubmit} Txt={"Daftar"} Notif={"Harap Isi Semua Field"} top={"50px"} right={"85px"}/>
          </div>
        </div>
      </div>
      <AreaClickable rootDispatch={rootDispatch} />
    </div>
  );
};



export default Signup;




// 881038242584

