import React from "react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import resim1 from "./img/1.png";
import resim2 from "./img/2.png";
import resim3 from "./img/3.png";
import resim4 from "./img/4.png";
import resim5 from "./img/5.png";
import resim6 from "./img/6.png";
import resim7 from "./img/7.png";
import resim8 from "./img/8.png";
import resim9 from "./img/9.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "./MyEducation.css";
export default function MyEducation() {
  return (
    <section className="home">
      <div className="text">About Me</div>

      <div className="eduCerceve col-11 flex-wrap flex-xl-nowrap justify-content-xl-around ">
        <div className="schools col-12 col-md-11 col-xl-5">
          <div className="capture lead">My Education</div>
          <div className="school col-12">
            <img src={resim1} className="col-2" />
            <div className="col-8">
              <div className="school-name lead">Sapanca M.E.T.E.M</div>
              <div className="school-department lead">
                {" "}
                Web Design and Coding
              </div>
            </div>
            <div className="school-degree lead">High School</div>
          </div>
          <div className="school col-12">
            <img src={resim2} className="col-2" />
            <div className="col-8">
              <div className="school-name lead">Amasya University</div>

              <div className="school-department lead">
                B2 Intermediate / English Language
              </div>
            </div>
            <div className="school-degree lead">Preparatory</div>
          </div>
          <div className="school col-12">
            <img src={resim2} className="col-2" />
            <div className="col-8">
              <div className="school-name lead">Amasya University</div>

              <div className="school-department lead">
                Computer and Instructional Technologies Teacher
              </div>
            </div>
            <div className="school-degree lead">Licence</div>
          </div>
          <div className="capture lead">Extra Info</div>
          <div className="school col-12">
            <img src={resim3} className="col-2" />
            <div className="col-8">
              <div className="school-name lead">Malatya Central Command</div>

              <div className="school-department lead">Short Term (6 Month)</div>
            </div>
            <div className="school-degree lead">Military Services</div>
          </div>
        </div>

        <div className="skillxx col-12 col-md-11 col-xl-5">
          <div className="capture lead">My Hobbies</div>
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
            <SwiperSlide >
              <div className="school">
                <img src={resim4} className="col-2"  />
                <div className="col-8">
                  <div className="school-name lead">Playing Volleyball</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="school">
                <img src={resim5} className="col-2" />
                <div className="col-8">
                  <div className="school-name lead">Watching Sci-Fi Movie</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="school">
                <img src={resim6} className="col-2" />
                <div className="col-8">
                  <div className="school-name lead">Watching Anime</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim7} className="col-2" />
                <div className="col-8">
                  <div className="school-name lead">Codeing</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim8} className="col-2" />
                <div className="col-8">
                  <div className="school-name lead">Drawing</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="school">
                <img src={resim9} className="col-2" />
                <div className="col-8">
                  <div className="school-name lead">Listen to Soul Music</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="capture lead">About Me</div>
          <div className="school">
            <div className="school-department lead">
              "I am a creative, communication-skilled, and collaborative
              Frontend Development professional. Aligned with my goals, I aim to
              approach with diverse perspectives and thrive through new
              opportunities."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
