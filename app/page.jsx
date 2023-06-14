"use client";

import axios from "axios";
import "../styles/globals.css";
import Image from "next/image";
import {useState} from "react";
import {BsSearch} from "react-icons/bs";
import Clima from "./components/Clima";
import Spinner from "./components/Spinner";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&lang={sp, es}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div>
          {/* BG image */}
          <Image
            src="https://images.unsplash.com/photo-1579619087996-31f649e3ab2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
            // width={1920}
            // height={1080}
            fill={true}
            alt="background photo"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30" />

          {/* Busqueda */}
          <div className="relative flex justify-between items-center max-w-500 w-full m-auto pt-10 text-white">
            <form
              onSubmit={fetchWeather}
              className="flex justify-between w-3/6 m-auto p-3 bg-transparent border border-black text-black rounded-2xl"
            >
              <div>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-md bg-transparent focus:outline-none  placeholder:pl-1 placeholder:text-white text-white text-lg"
                  type="text"
                  placeholder="Busca tu ciudad"
                />
              </div>
              <button onClick={fetchWeather}>
                <BsSearch size={20} />
              </button>
            </form>
          </div>

          {/* Clima mostrado */}
          <div>{weather.main && <Clima data={weather} />}</div>
        </div>
      </>
    );
  }
}
