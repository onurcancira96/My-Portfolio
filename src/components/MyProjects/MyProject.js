import React, { useState } from "react";
import "./MyProject.css";
import {
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Mousewheel,
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
import certi1 from "./img/certification/1.png";
import certi2 from "./img/certification/2.png";
import certi3 from "./img/certification/3.png";
import certi4 from "./img/certification/4.png";
import certi5 from "./img/certification/5.png";
import certi6 from "./img/certification/6.png";
import certi7 from "./img/certification/7.png";
import certi8 from "./img/certification/8.png";
import certi9 from "./img/certification/9.png";
import certi10 from "./img/certification/10.png";

export default function MyProject() {
  const [imageVisible, setImageVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const toggleImage = () => {
    setImageVisible(!imageVisible);
  };
  const changeImageUrl = (value) => {
    setImageUrl(value);
  };

  return (
    <section className="home">
      <div className="text lead">My Projects & Others</div>
      <div className="proCerceve col-11 flex-wrap flex-xl-nowrap justify-content-xl-around">
        <div className="schools col-12 col-md-11 col-xl-7">
          <div className="capture">My Award</div>
          <div className="school col-12">
            <img src={resim1} className="col-2 align-self-start" />
            <div>
              <div className="school-name lead">
                TUBITAK 2242 (First & Fourth Prize)
              </div>
              <div className="school-department lead">
                <p className="lead">
                  The project, organized by the Scientific and Technological
                  Research Council of Turkey (TUBITAK) Presidency's Science
                  Support Program Directorate, titled{" "}
                  <em>
                    "8th University Student Research Project Competitions,"
                  </em>{" "}
                  received the <strong>First Prize</strong> in the{" "}
                  <strong>Education</strong> category during the Inner Anatolia
                  Region project evaluations held on August 25-26, 2020.
                  Subsequently, the project achieved the title of{" "}
                  <strong>4th place nationally</strong> in the following stages.
                </p>
              </div>
            </div>
            <div className="school-degree lead">2020</div>
          </div>

          <div className="capture lead">My Publication</div>
          <div className="school">
            <img src={resim2} className="col-2 align-self-start" />
            <div>
              <div className="school-name lead">
                Journal of Information and Communication Technologies
              </div>
              <div className="school-department lead">
                <p className="lead">
                  Designing and developing a game-based augmented reality
                  application for students with autism spectrum disorder.{" "}
                  <a
                    className="tag"
                    href="https://dergipark.org.tr/tr/pub/bited/issue/74344/1177541"
                    target="_blank"
                  >
                    View me
                  </a>
                </p>
              </div>
            </div>
            <div className="school-degree">2022</div>
          </div>

          <div className="capture lead">My Certifications</div>

          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper col-12 lead"
          >
            <SwiperSlide>
              <div className="school">
                <img src={resim3} className="col-4" />
                <div className="col-6">
                  <div className="school-name">BTK Academy</div>
                  <div className="school-department">
                    HTML 5
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi1);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim3} className="col-4" />
                <div className="col-6">
                  <div className="school-name">BTK Academy</div>
                  <div className="school-department">
                    CSS
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi2);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school d-flex">
                <img src={resim3} className="col-4" />
                <div className="col-6">
                  <div className="school-name">BTK Academy</div>
                  <div className="school-department">
                    Javascript
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi3);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim4} className="col-4" />
                <div className="col-6">
                  <div className="school-name">Turkcell</div>
                  <div className="school-department">
                    HTML 5
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi4);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim4} className="col-4" />
                <div className="col-6">
                  <div className="school-name">Turkcell</div>
                  <div className="school-department">
                    CSS
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi5);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim4} className="col-4" />
                <div className="col-6">
                  <div className="school-name">Turkcell</div>
                  <div className="school-department">
                    Javascript
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi6);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim4} className="col-4" />
                <div className="col-6">
                  <div className="school-name">Turkcell</div>
                  <div className="school-department">
                    React
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi7);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim6} className="col-4" />
                <div className="col-6">
                  <div className="school-name">Google</div>
                  <div className="school-department">
                    Fundamentals I
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi8);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim6} className="col-4" />
                <div className="col-6">
                  <div className="school-name">Google</div>
                  <div className="school-department">
                    Fundamentals II
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi9);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim5} className="col-4" />
                <div className="col-6">
                  <div className="school-name lead">Gobito Digital</div>
                  <div className="school-department lead">
                    Cinema8
                    <div
                      className="viewMe"
                      onClick={() => {
                        changeImageUrl(certi10);
                        toggleImage();
                      }}
                    >
                      View Me
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {imageVisible && (
            <div className="popup-image">
              <span onClick={toggleImage}>&times;</span>
              <img src={imageUrl} />
            </div>
          )}
        </div>
        <div className="skillxx col-12 col-md-11 col-xl-4">
          <div className="capture lead">My Projects</div>
          <Swiper
            speed={500}
            slidesPerView={3}
            direction={"vertical"}
            mousewheel={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Mousewheel]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: -24,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            className="mySwiper col-12"
          >
            <SwiperSlide>
              <div className="school">
                <div className="col-8">
                  <div className="school-name lead">Coming Soon</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <div className="col-8">
                  <div className="school-name lead">Coming Soon</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <div className="col-8">
                  <div className="school-name lead">Coming Soon</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <div className="col-8">
                  <div className="school-name lead">Coming Soon</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <div className="col-8">
                  <div className="school-name lead">Coming Soon</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <div className="col-8">
                  <div className="school-name lead">Coming Soon</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
