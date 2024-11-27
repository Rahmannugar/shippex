"use client";

import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import User from "./components/User";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken || null);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      {token ? (
        <div>
          <User />
        </div>
      ) : (
        <div className="h-screen flex flex-col">
          <Navbar />
          <Signin />
        </div>
      )}
    </div>
  );
};

export default Page;
