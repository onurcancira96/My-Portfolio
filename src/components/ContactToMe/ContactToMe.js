import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactFormSchema } from "./Validations/UserValidation";
import emailjs from "@emailjs/browser"; // emailjs-com kütüphanesini doğru şekilde import ettiğinizden emin olun
import "./ContactToMe.css";
import resim1 from "./img/1.png";
import resim2 from "./img/2.png";
import resim3 from "./img/3.png";
import resim4 from "./img/4.png";
import resim5 from "./img/5.png";
import resim6 from "./img/6.png";
import Cv from "./img/OnurcanCiraCV.pdf";

import ToastComponent from "./components/ToastComponent";
import { useEffect } from "react";

export default function ContactToMe() {
  //******* */
  const [items, setItems] = useState([]);

  const appendChildToContainer = (buttonId) => {
    if (items.length < 3) {
      setItems((prevItems) => [...prevItems, { id: buttonId, visiable: true }]);
    }
    navigator.clipboard.writeText("onurcan.cira96@gmail.com");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (items.length > 0) {
        const newItems = [...items];
        newItems.splice(0, items.length);
        setItems(newItems);
      }
    }, 5400);

    console.log(items);
    return () => {
      clearInterval(timer);
    };
  }, [items]);
  //----------------------
  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const formRef = useRef(null);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await emailjs.sendForm(
        "service_mpoffkn", // Doğru hizmet kimliğini buraya girin
        "template_escx3d2", // Doğru şablon kimliğini buraya girin
        formRef.current,
        "3MixkvnVZdc3Drl0J" // Doğru kullanıcı kimliğini buraya girin
      );
      appendChildToContainer("success");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <section className="home">
      <div className="text">Contact To Me</div>
      <div className="conCerceve col-11 flex-wrap lead align-items-start">
      
<div className="contact col-11 col-md-6">

<div className="capture col-12">Send a Message to Me</div>
<Formik
          initialValues={initialValues}
          validationSchema={contactFormSchema}
          onSubmit={handleSubmit}
          className="formik col-12  "
        >
          {({ isSubmitting }) => (
            <Form ref={formRef} className="form">
              <div className="formDiv">
                <Field
                  type="text"
                  id="name"
                  name="user_name"
                  className="custom-input"
                  placeholder="Name..."
                />
                <ErrorMessage
                  name="user_name"
                  component="div"
                  className="errorx active"
                />
              </div>

              <div className="formDiv">
                <Field
                  type="email"
                  id="email"
                  name="user_email"
                  className="custom-input"
                  placeholder="email@email.com"
                />
                <ErrorMessage
                  name="user_email"
                  component="div"
                  className="errorx active"
                />
              </div>

              <div className="formDiv">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="custom-textarea"
                  placeholder="Your Message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="errorx active"
                />
              </div>
              <div className="formDiv2 col-12 d-flex flex-wrap justify-content-around">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="custom-button  col-3"
                >
                  Send to Message
                </button>
                <img src={resim1} className="arrowImg col-8" alt="" />
              </div>
              <div className="links">
                <a href="https://github.com/onurcancira96" target="blank_">
                  <img className="linksImg" src={resim2} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/onurcancira96/"
                  target="blank_"
                >
                  <img className="linksImg" src={resim3} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/tenshigalad/"
                  target="blank_"
                >
                  <img className="linksImg" src={resim4} alt="" />
                </a>
                <a
                  onClick={() => {
                    appendChildToContainer("success2");
                  }}
                >
                  <img className="linksImg" src={resim5} alt="" />
                </a>
                <a
                  href={Cv}
                  download="OnurcanCira_FrontEnd_CV.pdf"
                  onClick={() => {
                    appendChildToContainer("success3");
                  }}
                >
                  <img className="linksImg" src={resim6} alt="" />
                </a>
              </div>
            </Form>
          )}
        </Formik>

</div>
      </div>
      <ul className="notifications">
        {items.map((item, index) => (
          <ToastComponent key={index} id={item.id} visiable={item.visiable} />
        ))}
      </ul>
    </section>
  );
}
