import React, { useContext, useRef } from "react";
import { GlobalData } from "../../GlobalState";
import axios from "axios";


import logo from "../assets/icons/logo.svg";
import info from "../assets/icons/info.svg";

import { Input, Buttons, AreaClickable, Notification } from "./Assets";

const ActivationUser = () => {
  const {rootState, rootDispatch} = useContext(GlobalData)

  const codeRef =  useRef(null)

  async function handleSubmit (e) {
    e.preventDefault()
    rootDispatch({case: "loading", payload: true})
    try {

      const res = await axios.post("/api/user/activationUser", {
        userCode: codeRef.current.value
      })

      console.log(res);
    } catch (err) {
      rootDispatch({case: "notification", payload: err.response.data.msg})
      rootDispatch({case: "loading", payload: false})
    }
  }
  
  return (
    <div className="activation__user">
      <div className="area__activation">
        <div className="activation__wrapper">
          
          <div className="strip__top"></div>
          <img src={logo} width={50} alt="" className="login__logo" />
          <p>VERIFIKASI USER</p>

          <div className="section__wrapper">
            <Input
              Class={rootState.notification === "Kode Verifikasi Kamu Salah atau sudah Kadaluarsa silahkan kembali ke halaman sebelumnya" ? "alert" : " "}
              Ref={codeRef}
              Name={"code"}
              Type={"text"}
              Holder={"masukkan 4 angka verifikasi"}
              Max={4}
              Event={() => rootDispatch({ case: "notification", payload: "" })}
            />
            <i>
            {rootState.notification && <Notification txt={rootState.notification}/>}
            {rootState.notification === "Kode Verifikasi Kamu Salah atau sudah Kadaluarsa silahkan kembali ke halaman sebelumnya" && (<img src={info} alt="info" width={18.24}/>) }
            </i>
          </div>


          <div className="submit__section" id="submit__section">
            <Buttons OnClick={handleSubmit} Txt={"Submit"} Notif={"Harap Isi Semua Field"} />
          </div>
        </div>
      </div>
      <AreaClickable rootDispatch={rootDispatch}/>
    </div>
  );
};

export default ActivationUser;
