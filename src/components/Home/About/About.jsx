import React from "react";
import "../../../scss/about.scss";
import img1 from "../../../assets/images/About/Cyberpunk_2077_Key_Art_Hero_1280x.webp";
import img2 from "../../../assets/images/About/The_Witcher_Geralt_Hero_1280x (1).webp";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container max-w-[1280px] mx-auto w-[100%] py-[90px] px-[20px]">
          <div className="grid">
            <div className="box">
              <img
                src={
                  "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="About-Img-1"
                className="w-[100%] object-contain"
              />
              <div className="img_des transition-all">
                <span>Collection 2023</span>
                <h1>Collection Name</h1>
                <button>
                  <Link to="/products?category=Shirts">Shop Shirts</Link>
                </button>
              </div>
            </div>
            <div className="box">
              <img
                src={
                  "https://static01.nyt.com/images/2023/03/29/world/29brazil-yankees-dispatch/29brazil-yankees-dispatch-jumbo.jpg?quality=75&auto=webp"
                }
                alt="About-Img-2"
                className="w-[100%] 
            
            object-contain"
              />
              <div className="img_des transition-all">
                <span>Collection 2023</span>
                <h1>Collection Name</h1>
                <button>
                  <Link to="/products?category=Caps">Shop Caps</Link>
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
