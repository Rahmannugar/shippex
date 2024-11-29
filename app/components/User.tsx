"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";
import Default from "./Default";
import Error from "./Error";
import Success from "./Success";

export interface trackingDataProps {
  name: string;
  sender: string;
  consignee: string;
  modified: string;
  originAddress: string;
  destinationAddress: string;
  shipping_service: string;
  total_cod: number;
  timeline: Array<{
    time: string;
    date: string;
    event: string;
    description: string;
    person: string;
  }>;
}

const User = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [trackingData, setTrackingData] = useState<trackingDataProps | null>(
    null
  );

  return (
    <div className="h-screen flex flex-col">
      <div className="p-7 md:p-10">
        <Search
          error={error}
          setError={setError}
          setSuccess={setSuccess}
          setTrackingData={setTrackingData}
        />
      </div>

      <div className="flex-grow flex justify-center items-center">
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex justify-center items-center"
            >
              <Success trackingData={trackingData} />
            </motion.div>
          ) : error ? (
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
