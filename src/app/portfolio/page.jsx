"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "RoomMate Matcher",
    desc: "An app built with React that allows users connect and interact with potential roommates. Users can create, edit and delete listings by interacting with the backend API.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/Olawill/RoomMateMatcher",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Interview Scheduler",
    desc: "An app built with React that allows a student to create, edit and delete interview appointments by interacting with the Scheduler-API.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/Olawill/scheduler",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "PhotoLabs",
    desc: "PhotoLabs is a simple stock photo application - specifically a React-based single-page application (SPA) that allows users to view photos in different contexts.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/Olawill/photolabs-starter",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Tweeter",
    desc: "Tweeter is a simple, single-page Twitter clone. The platform enables users to craft concise posts, limited to 140 characters, which are then seamlessly added to the central page.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Olawill/tweeter",
  },
];

const PortfolioPage = () => {
  const portRef = useRef();

  const { scrollYProgress } = useScroll({ target: portRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={portRef}>
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-8xl">
          My Portfolio
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold font-[mono] md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:text-md lg:text-lg bg-blue-200 text-gray-600 font-semibold m-4 rounded">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl font-[mono]">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="text-xl font-[Georgia]"
              >
                Full-Stack Developer / Data Analyst
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
