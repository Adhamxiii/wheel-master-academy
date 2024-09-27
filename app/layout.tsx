import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { Lato, Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Wheel Master Academy",
  description:
    "Wheel Masters Academy offers comprehensive driving lessons and resources to help you become a confident driver. Join us to start your driving journey!",
  keywords: [
    "driving lessons",
    "wheel masters",
    "confident driver",
    "learn to drive",
    "driving academy",
    "road safety",
    "driving tips",
  ],
  openGraph: {
    title: "Wheel Master Academy",
    description:
      "Master the art of driving with our expert instructors at Wheel Masters Academy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${raleway.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
