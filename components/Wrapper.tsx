import { WrapperProps } from "@/Types";
import Link from "next/link";
import { IoLogoGooglePlaystore, IoMailOpen } from "react-icons/io5";

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={className}>
      <>{children}</>

      <div className="fixed bottom-2 right-6 hidden md:flex items-center flex-col gap-4">
        <Link href="https://www.googleplay" target="_blank">
          <IoLogoGooglePlaystore className="cursor-pointer rounded-full bg-black p-2 text-4xl text-white" />
        </Link>
        <Link href="mailto:" target="_blank">
          <IoMailOpen className="cursor-pointer rounded-full bg-black p-2 text-4xl text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Wrapper;
