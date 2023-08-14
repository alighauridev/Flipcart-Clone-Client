import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../scss/banner.scss";
import bannerImg1 from "../../../assets/images/Banners/main-banner-1_1903x.webp";
import bannerImg2 from "../../../assets/images/Banners/main-banner-2_1903x.webp";

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <PreviousBtn />,
    // nextArrow: <NextBtn />,
  };

  const banners = [
    {
      img: bannerImg1,
      subHeading: "Star Wars Up Coming",
      heading: "GAME GUIDE UNOFFICIAL",
    },
    {
      img: bannerImg2,
      subHeading: "Best Shooting Game",
      heading: "SHADOWGUN WAR GAMES",
    },
  ];

  return (
    <>
      <section className="banner w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <>
              <div className="slider_wrapper flex flex-column relative content-center align-middle ">
                <img
                  draggable="false"
                  className="  h-[88.9vh]  w-full object-cover"
                  src={el.img}
                  alt={el.heading}
                  key={i}
                />
                <div className="banner_about absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] gap-[30px]">
                  <span>{el.subHeading}</span>
                  <h1>{el.heading}</h1>
                  <button>
                    <a href="#">Shop Now</a>
                  </button>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
