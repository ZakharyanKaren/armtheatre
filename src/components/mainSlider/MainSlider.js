import React, { useEffect } from "react";
import "./mainSlider.css";
import RightFixedBar from "../rightFixedBar/RightFixedBar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

import pic1 from "../../images/mainSlider/1.png";
import pic2 from "../../images/mainSlider/2.png";
import pic3 from "../../images/mainSlider/3.png";
import pic4 from "../../images/mainSlider/4.png";
import pic5 from "../../images/mainSlider/5.png";
import menuPic1 from "../../images/mainSlider/general-menu/menu-pic1-1.png";
import menuPic2 from "../../images/mainSlider/general-menu/menu-pic1-2.png";
import menuPic3 from "../../images/mainSlider/general-menu/menu-pic2.png";
import menuPic4 from "../../images/mainSlider/general-menu/menu-pic3-1.png";
import menuPic5 from "../../images/mainSlider/general-menu/menu-pic3-2.png";
import menuPic6 from "../../images/mainSlider/general-menu/menu-pic4.png";
import menuPic7 from "../../images/mainSlider/general-menu/menu-pic5-1.png";
import menuPic8 from "../../images/mainSlider/general-menu/menu-pic5-2.png";
import salesShadow from "../../images/mainSlider/general-menu/sales-shadow.png";

function MainSlider() {
  useEffect(() => {
    Aos.init({ duration: 1000 /*once: "true"*/ });
  }, []);
  return (
    <div className="main-wrapper">
      <div className="mainSlider">
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={pic1} alt="1" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={pic2} alt="2" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={pic3} alt="3" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={pic4} alt="4" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={pic5} alt="5" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grids">
        <div
          data-aos="fade-left"
          className="sections-animation right-animation"
        >
          <div className="menu-sales-pics">
            <img src={menuPic1} alt="pic1" />
            <img src={menuPic2} alt="pic2" />
          </div>
          <div className="menu-sales">
            <h3>Ցուցահանդես Վաճառք</h3>
            <button>Իմանալ ավելին</button>
            <img src={salesShadow} alt="shadow" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="sections-animation left-animation"
        >
          <div className="menu-encyclopedia">
            <h3>Բոլոր արվեստի գործիչները մեր՝</h3>
            <button>Իմանալ ավելին</button>
          </div>
          <div className="menu-encyclopedia-pics">
            <img src={menuPic3} alt="pic3" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="sections-animation right-animation"
        >
          <div className="menu-culture-pics">
            <img src={menuPic4} alt="pic4" />
            <img src={menuPic5} alt="pic5" />
          </div>
          <div className="menu-culture">
            <h3>Մշակութային անցուդարձ</h3>
            <button>Իմանալ ավելին</button>
            <img src={salesShadow} alt="shadow" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="sections-animation left-animation"
        >
          <div className="menu-culture-video">
            <h3>Հայ մշակույթի</h3>
            <button>Տեսանյութերը</button>
            <h3>Մեզ մոտ</h3>
          </div>
          <div className="menu-culture-video-pics">
            <img src={menuPic6} alt="pic6" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="sections-animation right-animation"
        >
          <div className="menu-deaths-pics">
            <img src={menuPic7} alt="pic1" />
            <img src={menuPic8} alt="pic2" />
          </div>
          <div className="menu-deaths">
            <button>2021 թվականին կյանքից հեռացան</button>
            <img src={salesShadow} alt="shadow" />
          </div>
        </div>
      </div>

      <RightFixedBar />
    </div>
  );
}

export default MainSlider;
