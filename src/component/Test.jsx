import React from "react";

const Test = () => {
  return (
    <section className="border-2 overflow-hidden h-[50vh] w-[90vw] my-9 mx-auto">
         <div className="h-[80vh] w-[90vw]  overflow-hidden">
          <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKc4mQbokSIypGENWc2c4lGZYOnXQGfgPPWw&s" alt="image1" />
        </div>
        <div className="h-[80vh] w-[90vw] ">
          <img className="h-full w-full object-cover" src="https://marketplace.canva.com/EAFH0H90V7Y/1/0/1600w/canva-yellow-illustrated-music-festival-poster-landscape-IuDAkfyDlZs.jpg" alt="image2" />
        </div>
        <div className="h-[80vh] w-[90vw] ">
          <img className="h-full w-full object-cover" src="https://cdn.europosters.eu/image/750/posters/linkin-park-live-landscape-i6804.jpg" alt="image3" />
        </div>
    </section>
  );
};

export default Test;
