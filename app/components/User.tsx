"use client";

import Image from "next/image";
import Search from "./Search";
import Default from "./Default";
import { useState } from "react";
import Error from "./Error";
import Success from "./Success";

const User = () => {
  const [error, setError] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <div className="p-7 md:p-10">
        <Search error={error} setError={setError} />
      </div>

      {error ? <Error /> : <Success />}
    </div>
  );
};
export default User;
