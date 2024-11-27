"use client";

import Image from "next/image";
import Search from "./Search";

const User = () => {
  return (
    <div className="p-7 md:p-10">
      <Search />
      <div className="flex justify-center items-center h-screen">
        <div className="w-[15.625rem] h-[9rem] relative">
          <Image
            fill
            src="/default-home.png"
            alt="default-home"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default User;
