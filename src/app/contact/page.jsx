"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello ";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col pb-20 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/5 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl lg:text-6xl">
          <div>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-4/5 lg:h-full lg:w-1/2 bg-gradient-to-b from-red-50 to-white rounded-xl text-xl flex flex-col gap-8 justify-center p-12"
        >
          <span>Dear Wale,</span>
          <textarea
            rows={6}
            name="user_message"
            id="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            placeholder="Write your message here"
          />
          <span>My email address is </span>
          <input
            type="text"
            name="user_email"
            id="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 font-semibold text-gray-600 p-4 rounded-xl">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your Message has been sent Successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong. Message not sent.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
