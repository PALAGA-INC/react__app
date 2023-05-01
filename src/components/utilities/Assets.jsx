import React, {useContext} from 'react'
import { GlobalData } from '../../GlobalState';
import arrowLeft from '../assets/icons/arrowLeft.svg';
import info from "../assets/icons/info.svg";


export function ArrowLeft() {
  const {rootDispatch} = useContext(GlobalData)
  return(
    <div className='arrow'>
      <div className="arrow__wrapper">
      <img className="arrow__left cursorpointer" src={arrowLeft} alt="arrowLeft" width={40} onClick={() => rootDispatch({case: "windowOpen", payload: ""})}/>
      </div>
    </div>
  )
}

export function Buttons({OnClick,Txt,Notif, top, right}) {
  
  const { rootState } = useContext(GlobalData);

  if (rootState.notification === Notif) {
    return (
      <button className="alert" onClick={OnClick}>{Txt}{rootState.loading ? "..." : "   "}
        <i style={{
          top,
          right
        }}>
          <Notification txt={rootState.notification}/>
          <img className="info" src={info} alt="info" width={18.24}/>
        </i>
      </button>
    )     
    
  }
  return <button onClick={OnClick}>{Txt}{rootState.loading ? "..." : "   "}</button>

}

export function Notification({txt, backgroundColor, bottom, left, width, fontSize}) {
  return (
    <div className="notification" id='notification' style={{ backgroundColor,width,left,bottom }}>
      <div className="content" style={{
        fontSize
      }}
      
      >{txt}</div>
      <div className="topside" style={{
        backgroundColor
      }}></div>
    </div>
  )
}

export function AreaClickable() {
  
  const {rootDispatch} = useContext(GlobalData)

  return (
    <div 
    className="area__click"
    onClick={() => rootDispatch({case: "windowOpen", payload: ""})}
    ></div>
  )


  
}

export function Input({ Max, Name, Type, Event, Color, Border, Holder, Ref, Class, w, h }) {
  return (
    <>
      <label htmlFor={Name}>*{Name}</label>
      <input
        className={Class}
        type={Type}
        onClick={Event}
        ref={Ref}
        // name={Name}
        // id={Name}
        placeholder={Holder}
        autoComplete="true"
        maxLength={Max}
        
      />
    </>
  );
}
