import React, { useState, useEffect, useRef } from "react";

function ProSkills(props) {
  const [progressStartValue, setProgressStartValue] = useState(0);
  const progressEndValue = props.end;
  const textName = props.name;

  const speed = 20;

  useEffect(() => {
    const progress = setInterval(() => {
      if (progressStartValue < progressEndValue) {
        setProgressStartValue((prevValue) => prevValue + 1);
      } else {
        clearInterval(progress);
      }
    }, speed);

    return () => {
      clearInterval(progress);
    };
  }, [progressStartValue]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressStartValue(0);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  //*********************** */
  const elementRef = useRef();
  const imgRef = useRef();

  const [width, setWidth] = useState(0);
  const [widthImg, setWidthImg] = useState(0);


  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        const newWidth = elementRef.current.offsetWidth;
        setWidth(newWidth);
      }
    };
    const updateHeight2 = () => {
      if (imgRef.current) {
        const newWidth = imgRef.current.offsetWidth;
        setWidthImg(newWidth);
      }
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight2);
    updateHeight2();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("resize", updateHeight2);

    };
  }, []);
  const circularProgressStyle = {
    background: `conic-gradient(#454545 ${
      progressStartValue * 3.6
    }deg, #8a8585 0deg)`,
    width: "50%",
    height: width + "px",
  };

  const imgStyle = {
    top: ((width - widthImg -widthImg/2) + "px"),
  };
  return (
    <div class="containert">
      <div
        className="circular-progress"
        ref={elementRef}
        style={circularProgressStyle}
      >
        <div className="progress-value fs-2 ">
          {`${progressStartValue}%`}
          <img src={props.url} alt="" ref={imgRef} style={imgStyle} />
        </div>
      </div>
      <span class="textt lead">{textName}</span>
    </div>
  );
}

export default ProSkills;
