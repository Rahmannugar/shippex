"use client";

import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import User from "./components/User";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/auth", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Authentication failed");
        }
        const result = await response.json();
        setIsLoggedIn(result.isAuthenticated);
      } catch (error: any) {
        console.error("Auth check failed:", error.message);
        setIsLoggedIn(false);
      } finally {
        setTimeout(() => {
          setPageLoaded(true);
        }, 800);
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <>
      {pageLoaded ? (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {isLoggedIn ? (
            <div>
              <User />
            </div>
          ) : (
            <div className="h-screen flex flex-col">
              <Navbar />
              <Signin />
            </div>
          )}
        </motion.div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
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
        </div>
      )}
    </>
  );
};

export default Page;
