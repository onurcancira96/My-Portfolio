import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MyEducation from "../MyEducation/MyEducation";
import MasterPage from "../MasterPage/MasterPage";
import MySkills from "../MySkills/MySkills";
import MyProject from "../MyProjects/MyProject";
import ContactToMe from "../ContactToMe/ContactToMe";
import NavbarJ from "../NavbarJ/NavbarJ";
import { Routes, Route } from "react-router-dom";

function Master() {
  const [modeText, setModeText] = useState(true);
  const [modeBody, setModeBody] = useState("Koyu Mod");
  const modeSwitch = () => {
    setModeText(!modeText);

    if (modeText == false) {
      setModeBody("Koyu mod");
    } else {
      setModeBody("Açık mod");
    }
  };


  // ---------------------
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={modeText ? "body" : "body dark"}>
      {windowWidth >= 768 ? <Navbar  modeBody={modeBody} func={modeSwitch}/> : <NavbarJ modeBody={modeBody} func={modeSwitch}/>}
    
      <Routes>
        <Route path="/My-Portfolio/" element={<MasterPage />}  />
        <Route path="/education" element={<MyEducation />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/contact" element={<ContactToMe />} />
      </Routes>
    </div>
  );
}

export default Master;
