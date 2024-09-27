"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import { motion } from "framer-motion";
import { smoothIn } from "@/animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Gauge,
  Wrench,
  Battery,
  Droplet,
  Wind,
  Thermometer,
  Cog,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Wrapper className="flex flex-col justify-center text-center">
        <div className="mt-20">
          <motion.div
            variants={smoothIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="container flex flex-col gap-8 py-8 max-w-2xl mx-auto"
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Vehicle Maintenance Matters</CardTitle>
                <CardDescription>
                  Regular maintenance keeps your car running smoothly, improves
                  fuel efficiency, extends your vehicle&apos;s lifespan, and
                  ensures your safety on the road.
                </CardDescription>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Droplets className="mr-2 h-5 w-5" />
                    Regular Oil Changes
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Change your oil every 3,000 to 5,000 miles for conventional
                  oil, or 7,500 to 10,000 miles for synthetic oil. Regular oil
                  changes keep your engine running smoothly and prevent wear and
                  tear.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Gauge className="mr-2 h-5 w-5" />
                    Check Tire Pressure
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Check your tire pressure monthly and before long trips. Proper
                  tire inflation improves fuel efficiency, ensures even wear,
                  and enhances safety. Don&apos;t forget to rotate your tires
                  every 5,000 to 8,000 miles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5" />
                    Follow the Maintenance Schedule
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Adhere to your vehicle&apos;s maintenance schedule as outlined
                  in the owner&apos;s manual. This includes regular check-ups,
                  fluid replacements, and part replacements at recommended
                  intervals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Battery className="mr-2 h-5 w-5" />
                    Battery Care
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Keep your battery clean and check for corrosion on the
                  terminals. Most car batteries last 3-5 years. If your car is
                  slow to start, it might be time for a replacement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Droplet className="mr-2 h-5 w-5" />
                    Check Fluid Levels
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Regularly check and top up essential fluids including engine
                  oil, coolant, power steering fluid, brake fluid, and
                  windshield washer fluid. Low fluid levels can lead to serious
                  mechanical issues.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Wind className="mr-2 h-5 w-5" />
                    Replace Air Filters
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Replace your engine air filter every 15,000 to 30,000 miles,
                  or more frequently if you drive in dusty conditions. A clean
                  air filter improves fuel efficiency and engine performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Thermometer className="mr-2 h-5 w-5" />
                    Monitor Warning Lights
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Pay attention to warning lights on your dashboard. If a
                  warning light comes on, consult your owner&apos;s manual and
                  address the issue promptly to prevent more serious problems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  <div className="flex items-center">
                    <Cog className="mr-2 h-5 w-5" />
                    Regular Inspections
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Perform regular visual inspections of your vehicle. Look for
                  leaks, check the condition of belts and hoses, and listen for
                  unusual noises. Catching issues early can save you money and
                  prevent breakdowns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card>
              <CardHeader>
                <CardTitle>Need Professional Help?</CardTitle>
                <CardDescription>
                  While many maintenance tasks can be done at home, some require
                  professional expertise. Always consult a certified mechanic
                  for complex issues or if you&apos;re unsure about any aspect
                  of your vehicle&apos;s maintenance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/contact">Find a Mechanic</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
