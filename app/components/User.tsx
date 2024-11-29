"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";
import Default from "./Default";
import Error from "./Error";

const User = () => {
  const [error, setError] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="p-7 md:p-10">
        <Search error={error} setError={setError} />
      </div>

      <div className="flex-grow flex justify-center items-center">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex justify-center items-center"
            >
              <Error />
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex justify-center items-center"
            >
              <Default />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default User;
