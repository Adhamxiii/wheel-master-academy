"use client";

import Tabs from "@/components/Tabs";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { motion } from "framer-motion";
import { smoothIn } from "@/animation";

const page = () => {
  return (
    <>
      <Wrapper className="">
        <div className="mb-0 flex min-h-[calc(100%-100px)] mt-20 flex-col items-center justify-center gap-12 pt-0 lg:flex-row">
          <div className="max-w-md md:max-w-2xl lg:ml-8">
            <motion.h1
              variants={smoothIn({ direction: "down", delay: 0.2 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h1 font-montserrat"
            >
              Educational Content
            </motion.h1>
            <motion.p
              variants={smoothIn({ direction: "down", delay: 0.3 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-8 text-xl font-raleway"
            >
              Explore a wide range of resources to enhance your driving skills.
              Whether you&apos;re a beginner or an experienced driver, our
              comprehensive lessons, articles, and tutorials are designed to
              make learning safe driving techniques easy and accessible.
            </motion.p>
            <motion.div
              variants={smoothIn({ direction: "down", delay: 0.5 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Tabs />
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
