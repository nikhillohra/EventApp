import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const FetchData = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      )
      .then((response) => {
        const modifiedEvents = response.data.events.map((event) => ({
          ...event,
          imgUrl: event.imgUrl.replace("/view?usp=sharing", "/uc?id="),
        }));
        setEvents(modifiedEvents);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="container mx-auto items-center inter1 w-full px-4">
      <div className="flex items-center mt-4 lg:mt-12 flex-row">
        <h1 className="text-2xl font-semibold my-4 text-slate-100 ">
          Recommended Shows
        </h1>
        <IoMdArrowForward size={24} color="white" className="ml-2" />
        <p className=" text-[#989090] text-base underline flex-row-reverse ml-[10rem] sm:ml-[16rem] md:ml-[22rem] lg:ml-[36rem] xl:ml-[55rem]">
          See all
        </p>
      </div>

      {error && <div>Error: {error.message}</div>}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            height: 300,
          },
          768: {
            slidesPerView: 3,
            height: 400,
          },
          1024: {
            slidesPerView: 4,
            height: 450,
          },
        }}
        navigation={false}
        pagination={{ clickable: true }}
        className="ml-4 p-1 justify-center items-center"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col relative items-center f  max-w-xs rounded shadow-lg p-5 w-full bg-slate-500 h-[350px]">
              {event.imgUrl && (
                <>
                  <img
                    className="w-full h-[300px] object-cover mb-4"
                    src={event.imgUrl}
                    alt={event.eventName}
                  />
                </>
              )}
              <div className="px-0.5 py-1 text-white justify-between sm:ml-4 ">
                <p className="text-xs md:ml-4 lg:ml-2">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(event.date))}
                </p>
                <div className="font-bold text-base mb-1 md:mr-20 md:ml-4 lg:ml-2">
                  {event.eventName}
                </div>
                <p className="flex items-center md:ml-3 lg:ml-1">
                  <IoLocationSharp
                    size={14}
                    color="white"
                    className="mr-0.5  "
                  />
                  <span className="text-xs whitespace-nowrap ">
                    {event.cityName}
                  </span>
                  <span className="mr-4   text-[0.6rem] whitespace-nowrap sm:ml-8 ml-[2rem] md:ml-10 lg:ml-6 justify-self-end xl:ml-20 ">
                    {event.weather}
                  </span>
                </p>
                <span className="text-xs whitespace-normal px-4">
                  {" "}
                  {parseInt(event.distanceKm, 10)} Km
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {loading && <p>Loading...</p>}
      </Swiper>
    </div>
  );
};

export default FetchData;
