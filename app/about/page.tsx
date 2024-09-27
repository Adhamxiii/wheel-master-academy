"use client";

import MyCountUp from "@/components/CountUp";
import Wrapper from "@/components/Wrapper";
import { countUpItems } from "@/Data/data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { smoothIn } from "@/animation";

const AboutPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <Wrapper className="">
        <div className="mb-12 flex min-h-[calc(100%-100px)] mt-20 flex-col items-center justify-center gap-12 pt-28 lg:mb-0 lg:flex-row lg:pt-0">
          <motion.div
            variants={smoothIn({ direction: "right", delay: 0.5 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[600px]"
          >
            <Image
              src="/images/about.jpg"
              alt=""
              width={500}
              height={800}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            variants={smoothIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-md md:max-w-xl lg:ml-8 lg:w-1/2"
          >
            <div className="font-lato text-sm font-medium uppercase text-sky_blue">
              - Finest Transport
            </div>
            <div className="mt-8 font-montserrat text-3xl font-semibold">
              We Value Our Clients And Want Them To Have A Nice Experience
            </div>
            <p className="mt-8 font-raleway text-sm leading-7 text-black">
              At Wheel Masters Academy, we are dedicated to offering our clients
              a premium driving learning experience. With over 15 years of
              expertise, we aim to ensure every student feels confident on the
              road, thanks to our personalized instruction and extensive
              resources. Our experienced team has mentored over 100 satisfied
              customers, serving 150+ clients with over 50 educational items
              available.
            </p>

            <button className="mt-4 flex-none rounded-full bg-sky_blue px-6 py-2.5 font-lato text-sm font-normal text-white transition-all duration-300 hover:bg-black">
              Read More
            </button>

            <div
              className="mt-12 flex flex-wrap justify-center gap-12 font-raleway"
              ref={ref}
            >
              {countUpItems.map((item) => (
                <div className="text-center" key={item.id}>
                  <div className="text-3xl text-deep_blue">
                    {inView && (
                      <MyCountUp start={0} end={item.number} duration={3} />
                    )}
                    +
                  </div>
                  <div className="mt-2 text-sm text-black">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default AboutPage;
