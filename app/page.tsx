"use client";

import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import User from "./components/User";

const Page = () => {
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
        <div>
          <User />
        </div>
      ) : (
        <div className="h-screen flex flex-col">
          <Navbar />
          <Signin setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default Page;
