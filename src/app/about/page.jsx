"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillInView = useInView(skillRef, {once: true});
  const isSkillInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIO TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* BIO DESCRIPTION */}
            <p className="text-lg font-[Georgia]">
              Experienced full stack developer with a background in data
              analysis and specialization. Proficiently designed and implemented
              data-driven solutions for business insights. Developed and
              maintained web applications to enhance user experience and
              optimize data utilization. Passionate about Test-Driven Web
              Development, ensuring robust and efficient application
              development.
            </p>

            {/* BIO QUOTE */}
            <span className="italic">
              Change is the only constant in life. So keep evolving.
            </span>

            {/* BIO SIGNATURE SVG */}
            <div className="self-end bg-transparent">
              <svg
                width="214"
                height="145"
                viewBox="0 0 214 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="214" height="145" fill="#F1E1E1" />
                <g filter="url(#filter0_d_0_1)">
                  <path
                    d="M6 94.0601C12.197 96.4503 19.0353 94.1516 24.0759 90.5308C35.6405 82.2236 43.8287 69.7046 49.236 57.6374C52.8361 49.6033 55.4794 41.116 56.9556 32.565C57.9973 26.5308 57.9558 20.4151 58.9888 14.3818C59.6433 10.5591 60.2195 5.95612 62.0067 2.38209C62.9732 0.449389 63.8107 6.37092 63.9763 8.48078C65.8376 32.1917 66.6358 55.8998 67.6296 79.6605C67.8596 85.1583 68.6459 89.863 70.3616 95.0766C71.8233 99.518 73.6962 103.973 74.9362 108.46C75.5761 110.775 71.2325 105.007 69.4721 103.208"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </g>
                <g filter="url(#filter1_d_0_1)">
                  <path
                    d="M37 69.625C43.7049 75.1786 50.738 77.6008 59.7691 77.7784C69.5348 77.9704 81.0217 79.2351 88.631 72.6363C90.1872 71.2868 93.5101 69.2164 92.9336 66.8693C92.8631 66.5826 88.0536 64.5871 87.3119 64"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </g>
                <g filter="url(#filter2_d_0_1)">
                  <path
                    d="M87.6541 64.462C87.1194 66.8462 82.7334 67.199 86.2012 69.7292C88.874 71.6794 91.8363 69.6497 94.4764 69.532C97.0115 69.419 102.017 69.9702 101.236 66.659C100.648 64.1706 98.555 61.9843 96.8768 60.0116C93.6018 56.1616 96.672 68.2809 96.94 68.9687C98.9957 74.2448 101.216 79.6981 103.541 84.883C105.971 90.3005 105.828 96.6524 107.268 102.347C108.689 107.967 109.992 113.538 110.711 119.275C111.195 123.134 112.188 127.392 112.101 131.274C112 135.745 107.013 135.046 103.225 134.823C90.2538 134.058 80.8622 122.486 73.3146 114.205C59.4549 98.9976 44.9645 80.7204 43.9407 60.4059C43.7453 56.5274 43.8775 52.6271 43.8775 48.7448C43.8775 38.6777 61.3616 53.2405 63.2074 56.3499C65.439 60.1088 65.0393 65.6588 66.0817 69.7573C66.6207 71.8769 67.6925 74.2766 67.6925 76.4893C67.6925 77.6806 67.8903 74.1059 68.1663 72.9402C68.5566 71.2914 69.0446 68.1258 70.7246 66.9406C73.3052 65.1202 76.4813 71.0783 77.0416 72.1234C79.352 76.4331 79.9104 81.0258 81.2108 85.5872C81.4587 86.4569 82.2354 89.745 83.2322 90.4319C84.9393 91.6083 88.8045 83.3783 89.7071 82.5733C90.8398 81.5632 95.9198 83.0709 97.7612 82.5733C99.3661 82.1396 100.877 81.1978 102.183 80.2918C107.107 76.8764 101.907 72.6598 98.8351 69.0813C88.2075 56.6994 76.0676 44.1801 61.186 35.7316C59.6429 34.8556 54.2158 31.7707 51.7106 32.0136C50.2904 32.1512 48.3262 33.8644 47.4782 34.5768C43.27 38.112 41.6049 42.5184 40.3401 47.4491C39.2489 51.7029 37.8752 56.6014 40.4032 60.6594C47.1888 71.5518 62.4694 77.8381 74.7359 82.0663C100.252 90.8619 127.561 94.9857 154.361 99.22C155.209 99.354 200.309 105.823 206.729 107.332C213.165 108.845 193.402 108.255 186.767 107.783C149.436 105.128 112.829 99.6364 76.3467 92.2346C61.5359 89.2297 46.4353 87.1025 32.0017 82.8832C30.799 82.5316 28.0756 80.7088 29.317 80.489C36.0247 79.3011 42.9769 79.7758 49.8155 79.7285C90.4986 79.4468 131.139 81.4176 171.796 81.7565C174.213 81.7766 173.662 81.2822 172.112 80.1228C169.508 78.1755 166.638 76.528 163.963 74.6584C158.886 71.11 155.319 68.163 151.898 63.4479"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_1"
                    x="0.499603"
                    y="0.498108"
                    width="80.0005"
                    height="118"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_1"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_0_1"
                    x="31.5"
                    y="62.4999"
                    width="67.002"
                    height="24.9996"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_1"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_0_1"
                    x="23.4991"
                    y="30.5001"
                    width="190.001"
                    height="113.999"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_1"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* BIO SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            {/* SKILLS TITLE */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap CSS
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL / SQL Server / MySQL
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Ruby on Rails
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Flask
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>

            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERINECE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>

            {/* EXPERINECE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: 0 } : {}}
              className=""
            >
              {/* EXPERINECE LIST ITEM */}
              {/* FIRST LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Data Specialist
                  </div>
                  {/* JOB DESC */}
                  <div className="p-2 text-sm italic">
                    Design and develop data scraping code of 3 large brands to
                    update the library by 15% over weekends
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Yodify Inc.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* SECOND LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    LDAR Technician
                  </div>
                  {/* JOB DESC */}
                  <div className="p-2 text-sm italic">
                    Assisted site personnel with identifying, fixing, and
                    escalating leaks to maintain legal compliance while
                    decreasing operational downtime
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - 2021
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Integra Technologies
                  </div>
                </div>
              </div>

              {/* THIRD LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Research Assistant
                  </div>
                  {/* JOB DESC */}
                  <div className="p-2 text-sm italic">
                    Performed data collection, wrangling/cleaning, and analysis
                    of data from simulations and literature to help design
                    experiments thereby reducing overall cost of project
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2013 - 2015
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    University of Alberta
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
