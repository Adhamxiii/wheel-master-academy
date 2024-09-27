"use client";

import Wrapper from "@/components/Wrapper";
import { gallery } from "@/Data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { smoothIn } from "@/animation";

const page = () => {
  return (
    <>
      <Wrapper className="flex text-center flex-col justify-center">
        <div className="mt-20">
          <motion.div
            variants={smoothIn({ direction: "down", delay: 0.2 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="font-lato text-sm font-semibold uppercase text-sky_blue"
          >
            - Gallery
          </motion.div>
          <motion.div
            variants={smoothIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="container grid gap-8 py-8 lg:grid-cols-2"
          >
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={380}
                    className="w-full transform transition-transform duration-300 hover:rotate-2 hover:scale-125"
                  />
                </div>
                <div className="absolute bottom-5 ml-0 w-max overflow-hidden bg-white/60 text-left text-[1rem] uppercase tracking-widest text-deep_blue">
                  <div className="my-2 px-3">{item.title}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
