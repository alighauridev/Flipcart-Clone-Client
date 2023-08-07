import React from "react";
import img1 from "../../../assets/images/About/Cyberpunk_2077_Key_Art_Hero_1280x.webp";
import img2 from "../../../assets/images/About/The_Witcher_Geralt_Hero_1280x (1).webp";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="conatiner max-w-[1280px] mx-auto w-[100%] py-[90px] px-[20px]">
          <div
            className="w-[100%]"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <img
              src={img1}
              alt="About-Img-1"
              className="w-[100%]
            
            object-contain"
            />
            <img
              src={img2}
              alt="About-Img-2"
              className="w-[100%]
            
            object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
