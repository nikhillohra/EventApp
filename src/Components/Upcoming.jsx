import React, { useState, useEffect } from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

const Upcoming = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
      );
      setEvents(response.data.events);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  return (
    <div className="container mx-auto inter1 w-full px-4 overflow-x-hidden">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold my-4 text-black">
          Upcoming Events
        </h1>
        <IoMdArrowForward size={24} color="black" className="ml-2" />
      </div>
      {loading && <Spinner color="#ffffff" borderWidth={2} diameter={32} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {events
          .map((event, index) => (
            <div key={index} className="bg-slate-500 rounded-lg shadow-lg p-5 ">
              <div className="relative bg-slate-300 rounded flex flex-wrap">
                <img
                  className=" h-[300px] object-cover mb-4 rounded-lg"
                  src={event.imgUrl}
                  alt={event.eventName}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-2 py-1 text-white rounded">
                  <p className="text-xs mb-2">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(event.date))}
                  </p>
                </div>
              </div>

              <div className="px-2 py-1 text-white">
                <h2 className="font-bold text-lg mb-2">{event.eventName}</h2>
                <p className="flex items-center">
                  <IoLocationSharp size={14} color="white" className="mr-0.5" />
                  <span className="text-xs whitespace-nowrap mr-3">
                    {event.cityName}
                    <span className="mr-4   text-[0.6rem] whitespace-nowrap sm:ml-8 ml-[2rem] md:ml-10 lg:ml-6 justify-self-end xl:ml-20 ">
                      {event.weather}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          ))
          .slice(0, 6)}
      </div>
      <div className="flex justify-between mt-6 mb-6">
        <button
          className="px-4 py-2 bg-gradient-to-r from-cyan-900 to-red-500 w-[7rem] text-white rounded hover:from-pink-900 hover:to-yellow-500"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <p className="inter1 font-bold text-zinc-700 ">
          {page} of {totalPages}
        </p>

        <button
          className="px-4 py-2 bg-gradient-to-r from-cyan-900 to-red-500 w-[7rem] text-white rounded hover:from-pink-900 hover:to-yellow-500"
          onClick={() => setPage(page + 1)}
          disabled={events.length < 6}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
