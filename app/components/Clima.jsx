import React from "react";
import Image from "next/image";

const Clima = ({data}) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[800px] w-full h-[80vh] m-auto p-4 text-gray-300">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            className="z-50 select-none"
            width={100}
            height={100}
            alt="imagen_descripción_clima"
          />
          <p className="text-4xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}°</p>
      </div>

      {/* Clima completo */}

      <div className="h-[20vh] flex flex-col justify-evenly bg-black/50 rounded-lg">
        <p className="text-3xl text-center">
          Clima en <span>{data.name}</span>
        </p>
        <div className="flex justify-evenly text-center">
          <div>
            <p className="text-lg">Sensación térmica de:</p>
            <p className="text-lg font-bold">
              {data.main.feels_like.toFixed()}°
            </p>
          </div>
          <div>
            <p className="text-lg">Humedad:</p>
            <p className="text-lg font-bold">{data.main.humidity}%</p>
          </div>
          <div>
            <p className="text-lg">Velocidad del viento:</p>
            <p className="text-lg font-bold">{data.wind.speed.toFixed()}KM/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clima;
