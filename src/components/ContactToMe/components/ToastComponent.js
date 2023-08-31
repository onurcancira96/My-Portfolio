import React, { useEffect, useState } from "react";

export default function ToastComponent(props) {
  const toastDetails = {
    timer: 5000,
    success: {
      icon: "fa-circle-check",
      text: "Your message was successfully sent.",
    },
    success2: {
      icon: "fa-circle-check",
      text: "Email copied to your clipboard.",
    },
    success3: {
      icon: "fa-circle-check",
      text: "The document was downloaded successfully.",
    },
  };

  const [hide, setHide] = useState("");
  const [visiable, setVisiable] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHide("hide");
      setTimeout(() => {
        setVisiable(false);
      }, 400);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const close =()=>{
  setHide('hide')
  setVisiable(false)
  }
  const { icon, text } = toastDetails[props.id];
  return (
    <div className=" col-12">
      {props.visiable ? 
        <li className={`toast lead  col-12 ${props.id} ${hide}`}>
          <div className="column">
            <i className={`fa-solid ${icon}`}></i>
            <span className="lead">{text}</span>
          </div>
          <i
            className="fa-solid fa-xmark"
            onClick={close}
          ></i>
        </li>
       : null
      }
    </div>
  );
}
