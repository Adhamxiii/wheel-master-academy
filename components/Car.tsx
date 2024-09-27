import Image from "next/image";
import React from "react";

const Car = () => {
  return (
    <div>
      <Image
        src="/images/home.png"
        alt=""
        width={1980}
        height={1080}
        className="translate-z-0 w-[54rem] h-full"
      />
    </div>
  );
};

export default Car;
