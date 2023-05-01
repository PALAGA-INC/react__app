import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
export const GlobalData = createContext();

export const DataProvider = ({ children }) => {

  const [rootState, rootDispatch] = useReducer(
    (rootState, action) => {
      switch (action.case) {
                
        case "routerActive": return {routerActive: rootState.routerActive = action.payload, ...rootState}

        case "expandRouter": return {expandRouter: rootState.expandRouter = action.payload, ...rootState}

        case "expandShopingCart": return {expandShopingCart: rootState.expandShopingCart = action.payload, ...rootState}

        case "windowOpen": return {windowOpen: rootState.windowOpen = action.payload, ...rootState}
        
        case "eyes": return { eyes: (rootState.eyes = action.payload), ...rootState };
        
        case "info" : return {info: rootState.info = action.payload, ...rootState}
        
        case "loading" : return {loading: rootState.loading = action.payload, ...rootState}
        
        case "tooltip": return {tooltip: rootState.tooltip = action.payload, ...rootState}
        
        case "notification" : return {notification: rootState.notification = action.payload, ...rootState}

        case "accessToken" : return {accessToken: rootState.accessToken = action.payload, ...rootState}
        
        default: return {...rootState}
      }
  },{
      routerActive: "",
      expandRouter: false,
      expandShopingCart: false,
      windowOpen: "",
      eyes: false,
      info: "",
      loading : false,
      tooltip: "",
      notification: "",
      accessToken: "",

    }
  )

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstlogin")
    if(firstLogin) {
      const refreshToken = () => {
        axios.post("api/user/refresh_token").then(response => {
          rootDispatch({case : "accessToken", payload: response})
          rootDispatch({case : "info", payload: "berhasil mendapatkan token"})
        }).catch(err=>{
          rootDispatch({case : "info", payload: "gagal mendapatkan token silahkan login kembali"})
        })
      }
    }
  }, [])
  

  return <GlobalData.Provider value={{rootState,rootDispatch}}>{children}</GlobalData.Provider>;
};



