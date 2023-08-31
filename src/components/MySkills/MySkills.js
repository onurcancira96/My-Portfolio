import "./MySkills.css";
import {
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Mousewheel,
  EffectFlip,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import resim1 from "./img/1.png";
import resim2 from "./img/2.png";
import resim3 from "./img/3.png";
import resim4 from "./img/4.png";
import resim5 from "./img/5.png";
import resim6 from "./img/6.png";
import resim7 from "./img/7.png";
import resim8 from "./img/8.png";
import resim9 from "./img/9.png";
import resim10 from "./img/10.png";
import resim11 from "./img/11.png";
import resim12 from "./img/12.png";
import ProSkills from "./components/ProSkills";
import { useEffect, useState } from "react";

export default function MySkills() {
  const [isStateTrue, setIsStateTrue] = useState(4);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 992) {
      setIsStateTrue(3);
    } 
      else {
      setIsStateTrue(4);
    }
  };
    // İlk yüklemede de kontrol sağlamak için
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="home">
      <div className="text">My Skills</div>

      <div className="skillsCerceve col-11 align-items-md-start">
        <div className="imgSkills col-11">
        <div className="capture lead">Technologies I Use</div>
          
          <Swiper
            speed={2000}

            slidesPerView={isStateTrue}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper col-11 p-2"
          >
            <SwiperSlide>
              <img src={resim1} alt="HTML" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim2} alt="CSS" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim3} alt="Javascript" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim4} alt="React JS" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim5} alt="Redux" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim6} alt="SASS" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim7} alt="Bootstrap" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resim8} alt="Adobe Illustrator" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="skills col-11">
        <div className="capture lead ">My Skills Progress</div>
          <Swiper
          speed={500}
            slidesPerView={4}
            direction={"vertical"}
            mousewheel={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Mousewheel]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: -25,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="mySwiper col-11 col-lg-6"
          >
            <SwiperSlide>
              <div className="skill col-12">
                <div className="skill-name lead">
                  <img src={resim1} />
                  HTML
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="90%"
                    style={{ maxWidth: "90%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim2} />
                  CSS
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="75%"
                    style={{ maxWidth: "75%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim3} />
                  JAVASCRİPT
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="80%"
                    style={{ maxWidth: "80%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim4} />
                  REACT JS
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="75%"
                    style={{ maxWidth: "75%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim5} />
                  REDUX
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="80%"
                    style={{ maxWidth: "80%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim6} />
                  SASS
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="80%"
                    style={{ maxWidth: "80%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim7} />
                  BOOTSTRAP
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="80%"
                    style={{ maxWidth: "80%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill">
                <div className="skill-name lead">
                  <img src={resim8} />
                  Adobe ILlustrator
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-per"
                    per="70%"
                    style={{ maxWidth: "70%" }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
          loop={true}
          speed={2000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect={"flip"}
            grabCursor={true}
            modules={[EffectFlip, Autoplay]}
            flipEffect={{
              slideShadows: false,
            }}
            className="mySwiper mySwiper2 col-6 col-md-4 col-lg-3"
          >
            <SwiperSlide>
              <ProSkills end={95} name="Communication" url={resim9}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProSkills end={70} name="Team Work" url={resim10}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProSkills end={85} name="Project Management" url={resim11}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProSkills end={80} name="Creativity" url={resim12}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
