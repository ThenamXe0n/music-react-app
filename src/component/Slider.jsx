import React from "react";
import Slider from "react-slick";

//css import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingSection = () => {
  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 20,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="h-[80vh] w-[90vw] border-2 boder-red-600 m-5 mx-auto ">
      <Slider className="h-full w-full" {...settings}>
        <div className="h-[80vh] w-[90vw]  overflow-hidden">
          <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKc4mQbokSIypGENWc2c4lGZYOnXQGfgPPWw&s" alt="image1" />
        </div>
        <div className="h-[80vh] w-[90vw] ">
          <img className="h-full w-full object-cover" src="https://marketplace.canva.com/EAFH0H90V7Y/1/0/1600w/canva-yellow-illustrated-music-festival-poster-landscape-IuDAkfyDlZs.jpg" alt="image2" />
        </div>
        <div className="h-[80vh] w-[90vw] ">
          <img className="h-full w-full object-cover" src="https://cdn.europosters.eu/image/750/posters/linkin-park-live-landscape-i6804.jpg" alt="image3" />
        </div>
      </Slider>
    </section>
  );
};

export default SlidingSection;
