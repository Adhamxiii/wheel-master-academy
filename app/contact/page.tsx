"use client";

import { smoothIn } from "@/animation";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/data";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <Wrapper className="left-28 flex flex-col mt-8 items-center justify-center lg:flex-row lg:pt-0">
        <motion.div
          variants={smoothIn({ direction: "right", delay: 0.6 })}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="py-6 text-center md:px-6 lg:text-left"
        >
          <div className="mb-4 font-montserrat text-sm font-medium uppercase text-sky_blue">
            - Finest Transport
          </div>

          <div className="font-lato text-3xl font-semibold uppercase tracking-wide md:text-4xl md:tracking-widest">
            Ride To Destinations With Maximum Comfort
          </div>
          <p className="mb-8 mt-10 max-w-xl font-raleway text-sm leading-8">
            We Care About Your Comfort And Safety Do You Require A Car? Get In
            Touch With Us
          </p>

          <div>
            {contacts.map((contact) => (
              <div key={contact.id} className="mt-6">
                <div className="mb-2 font-montserrat text-xl font-medium uppercase">
                  {contact.title}
                </div>
                <div className="font-raleway text-sm">{contact.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="w-full border border-[#d4f1ff] px-8 py-4 text-sm tracking-widest lg:w-max">
              + More Details
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={smoothIn({ direction: "left", delay: 0.6 })}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="px-6 py-6 text-center sm:w-[30rem] lg:w-1/2"
        >
          <div className="mb-10 text-3xl font-semibold uppercase tracking-wide md:text-4xl md:tracking-widest">
            Leave a Comment
          </div>
          <form action="">
            <div className="mb-8 flex items-center border-b border-black py-2">
              <input
                type="text"
                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="mb-8 flex items-center border-b border-black py-2">
              <input
                type="text"
                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="mb-8 flex items-center border-b border-black py-2">
              <input
                type="email"
                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="mb-8 flex items-center border-b border-black py-2">
              <input
                type="text"
                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="mt-10 cursor-pointer rounded-full bg-sky_blue px-8 py-4 text-sm uppercase text-white transition-all duration-300 hover:bg-black"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default ContactPage;
