import { CountUpProps } from "@/Types";
import React from "react";
import CountUp from "react-countup";

const MyCountUp = ({ start, end, duration }: CountUpProps) => {
  return <CountUp start={start} end={end} duration={duration} />;
};

export default MyCountUp;
