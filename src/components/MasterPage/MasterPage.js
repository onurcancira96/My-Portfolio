import React, { useEffect, useState } from "react";
import "./MasterPage.css";
import resim1 from "./img/1.png";
import resim2 from "./img/2.png";
import resim3 from "./img/3.png";
import resim4 from "./img/4.png";
import resim5 from "./img/5.png";
import resim6 from "./img/6.png";
export default function MasterPage() {
  const [text, setText] = useState("Developer");
  const [sayac, setSayac] = useState(true);

  useEffect(() => {
    const time1 = setTimeout(() => {
      setText("Artist");
    }, 0);
    const time2 = setTimeout(() => {
      setText("Designer");
    }, 4000);
    const time3 = setTimeout(() => {
      setText("Developer");
    }, 8000);
    const time4 = setTimeout(() => {
      setSayac(!sayac);
    }, 12000);
    return () => {
      clearTimeout(time1);
      clearTimeout(time2);
      clearTimeout(time3);
      clearTimeout(time4);
    };
  }, [sayac]);

  return (
    <section className="home">
      <div className="text">My Portfolio</div>


      <div className="col-12 d-flex justify-content-center   flex-column flex-column-reverse align-items-center align-items-xl-center flex-xl-row flex p-5 ">
      <div className="col-xl-6 col-md-11 col-12">
        <h3 className="baslik display-2 col-12">Hi I'm Onurcan</h3>
        <div className="containerx">
          <span className="kayan first-text fs-1">I'm a </span>
          <span className="kayan sec-text fs-1">{text}</span>
          <div className="about lead">
            Experienced in web design processes, inclined to implement new
            technologies, adaptable to a demanding work pace, perfectionist, and
            attentive to quality.
          </div>
        </div>
      </div>
      <div className="frame2Dis col-xl-5 col-12 m-5">
        <div className="frame2 col-12">
        <img className="govde col-5" src={resim1} alt="" />
        <img className="kafa col-5 " src={resim2} alt="" />

        <div className="ay-simulasyonu col-5">
          <img className="ay  col-3 col-sm-5 col-md-5 " src={resim4} alt="" />
          <img className="ay2 col-3 col-sm-5 col-md-5 " src={resim5} alt="" />
          <img className="ay3 col-3 col-sm-5 col-md-5 " src={resim6} alt="" />
        </div>

        </div>
        <div className="golgeCerceve col-12 mt-5">
        <img className="golge container" src={resim3} alt="" />
        </div>
      </div>
      </div>


    </section>
  );
}
