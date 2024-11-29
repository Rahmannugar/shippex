"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Search from "./components/Search";
import Link from "next/link";

const NotFound = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
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
    <div>
      {isLoggedIn ? (
        <div className="h-screen flex flex-col">
          <div className="p-7 md:p-10 justify-start">
            <Search
              error={false}
              setError={undefined}
              setSuccess={undefined}
              setTrackingData={undefined}
              setNetworkError={undefined}
            />
          </div>

          <div className="flex-grow flex flex-col justify-center items-center text-center">
            <div className="w-[15.625rem] h-[9rem] relative">
              <Image
                fill
                priority
                src="/not-found.png"
                alt="not-found"
                className="object-cover"
              />
            </div>
            <div className="space-y-2 mt-10">
              <h1 className="text-2xl font-bold text-[#000000]">404</h1>
              <h1
                style={{ letterSpacing: "0.5%" }}
                className="text-sm text-[#838282]"
              >
                Oops! The page you're looking for can't be found.
              </h1>
            </div>

            <div className="mt-7">
              <Link
                href="/"
                style={{ letterSpacing: "0.5%" }}
                className="font-semibold text-primary text-[0.938rem] hover:underline"
              >
                Retry
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col justify-center h-screen items-center text-center">
          <div className="w-[15.625rem] h-[9rem] relative">
            <Image
              fill
              src="/not-found.png"
              alt="default-home"
              className="object-cover"
            />
          </div>
          <div className="space-y-2 mt-10">
            <h1 className="text-2xl font-bold text-[#000000]">404</h1>
            <h1
              style={{ letterSpacing: "0.5%" }}
              className="text-sm text-[#838282]"
            >
              Oops! The page you're looking for can't be found.
            </h1>
          </div>

          <div className="mt-7">
            <Link
              href="/"
              style={{ letterSpacing: "0.5%" }}
              className="font-semibold text-primary text-[0.938rem] hover:underline"
            >
              Retry
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default NotFound;
