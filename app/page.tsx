"use client";
import { smoothIn } from "@/animation";
import Car from "@/components/Car";
import Stack from "@/components/Stack";
import Wrapper from "@/components/Wrapper";
import { services } from "@/Data/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const serviceRef = useRef(null);
  const isInView = useInView(serviceRef, { once: true });

  return (
    <>
      <Wrapper className="flex flex-col items-center justify-center text-center">
        <div className="mt-16 h-full w-full">
          <div className="absolute right-[11rem] top-[-6rem] -z-10 size-[31.25rem] rounded-full bg-[#d4f1ff] blur-[10rem] sm:w-[68.75rem]" />
          <div className="2xl:left-[-5rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#edcafd] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-33rem] xl:left-[-15rem]" />
          <div className="h-full w-full">
            <div>
              <motion.div
                variants={smoothIn({ direction: "down", delay: 0.2 })}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4"
              >
                <Stack />
              </motion.div>
              <motion.h1
                variants={smoothIn({ direction: "down", delay: 0.2 })}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1 font-montserrat"
              >
                Master Driving with
                <br />
                <span className="text-deep_blue">Wheel Masters Academy.</span>
              </motion.h1>
              <motion.p
                variants={smoothIn({ direction: "down", delay: 0.3 })}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="p mx-auto flex max-w-3xl justify-center font-raleway text-black"
              >
                At Wheel Masters Academy, we provide top-notch driving lessons
                to help you develop the skills and confidence to drive safely on
                any road. Learn from professional instructors with years of
                experience.
              </motion.p>
              <motion.div
                variants={smoothIn({ direction: "down", delay: 0.6 })}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="z-10 mt-4 flex justify-center gap-x-4"
              >
                <button className="flex-none rounded-full bg-sky_blue px-6 py-2.5 text-sm font-normal text-white transition-all duration-300 hover:bg-black">
                  View Details
                </button>
              </motion.div>
              <div className="mt-8 h-full w-full">
                <motion.div
                  variants={smoothIn({ direction: "left", delay: 0.5 })}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="flex h-full w-full justify-center"
                >
                  <Car />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-24 flex  flex-col justify-center">
        <div className="h-fit" ref={serviceRef}>
          <div className="my-8 text-center md:px-8">
            <motion.div
              variants={smoothIn({ direction: "up", delay: 0.5 })}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className=""
            >
              <div className="text-sm font-medium uppercase text-sky_blue">
                - Services
              </div>
              <div className="mt-8 text-3xl font-semibold">
                What Our Clients Say About Us
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-black">
                Our clients love the convenience and expertise that Wheel
                Masters Academy offers. With a high success rate and friendly
                instructors, we&apos;ve helped many drivers confidently get on
                the road.
              </p>
            </motion.div>
            <motion.div
              variants={smoothIn({ direction: "down", delay: 0.5 })}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-4 grid gap-4 text-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {services.map((service) => (
                <div
                  className="rounded-lg border-2 bg-white p-8 text-center transition-all duration-300 hover:border-deep_blue"
                  key={service.id}
                >
                  <div className="mb-4 flex justify-center text-5xl text-deep_blue">
                    {service.icon}
                  </div>
                  <div className="mb-4 flex justify-center text-2xl font-medium">
                    {service.title}
                  </div>
                  <div className="flex justify-center text-sm text-black">
                    {service.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
