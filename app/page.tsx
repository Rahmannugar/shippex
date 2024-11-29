"use client";

import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import User from "./components/User";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [pageLoaded, setpageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setpageLoaded(true);
    }, 2000);

    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn === null) {
    return;
  }

  return (
    <>
      {pageLoaded ? (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {isLoggedIn ? (
            <div>
              <User />
            </div>
          ) : (
            <div className="h-screen flex flex-col">
              <Navbar />
              <Signin setIsLoggedIn={setIsLoggedIn} />
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          key="loading"
          className="h-screen flex justify-center items-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="w-[2rem] h-[2rem] relative"
          >
            <Image
              fill
              priority
              src="/icon.png"
              alt="icon"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Page;
