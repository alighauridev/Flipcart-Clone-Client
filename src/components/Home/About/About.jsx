import React from "react";
import "../../../scss/about.scss";
import img1 from "../../../assets/images/About/Cyberpunk_2077_Key_Art_Hero_1280x.webp";
import img2 from "../../../assets/images/About/The_Witcher_Geralt_Hero_1280x (1).webp";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container max-w-[1280px] mx-auto w-[100%] py-[90px] px-[20px]">
          <div className="grid">
            <div className="box">
              <img
                src={img1}
                alt="About-Img-1"
                className="w-[100%] object-contain"
              />
              <div className="img_des">
                <span>Best Action Game</span>
                <h1>DEAD RISING ZOMBIES</h1>
                <button>
                  <a href="#">Shop Now</a>
                </button>
              </div>
            </div>
            <div className="box">
              <img
                src={img2}
                alt="About-Img-2"
                className="w-[100%]
            
            object-contain"
              />
              <div className="img_des">
                <span>3D Pixel Racing</span>
                <h1>FAST DRIVE RACING</h1>
                <button>
                  {" "}
                  <a href="#">Shop Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
