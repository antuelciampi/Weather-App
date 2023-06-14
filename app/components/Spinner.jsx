import React from "react";
import Image from "next/image";
import SpinnerGif from "../../assets/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <Image
        src={SpinnerGif}
        className="w-[150px] m-auto block"
        alt="cargando..."
      />
    </>
  );
};

export default Spinner;
