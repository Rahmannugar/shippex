"use client";

import Image from "next/image";
import Search from "./Search";
import Default from "./Default";

const User = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-7 md:p-10">
        <Search />
      </div>

      <Default />
    </div>
  );
};
export default User;
