"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    redirect("/");
  }, []);
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center uppercase">
      404 Not Found
    </div>
  );
};
export default NotFound;
