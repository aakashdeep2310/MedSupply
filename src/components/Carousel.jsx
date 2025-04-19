import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Import modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import firstAidKit from "../assets/firstAidKit.png";
// import pulseOximeter from "../assets/pulseOximeter.png";
// import bpMonitor from "../assets/bpMonitor.png";
// import stethoscope from "../assets/stethoscope.png";
// import surgicalGown from "../assets/surgicalGown.png";
// import nebulizerMachine from "../assets/nebulizerMachine.png";
// import n95Mask from "../assets/n95Mask.png";
// import antisepticWipes from "../assets/antisepticWipes.png";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";


const images = [banner1, banner2, banner3];



const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }} 
      navigation 
      pagination={{ clickable: true }} 
      modules={[Navigation, Pagination, Autoplay]} 
      className="w-full h-96"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt="carousel" className=" w-full h-96 object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
