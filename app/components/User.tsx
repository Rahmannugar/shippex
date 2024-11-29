"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";
import Default from "./Default";
import Error from "./Error";
import Success from "./Success";
import NetworkError from "./NetworkError";

export interface trackingDataProps {
  name: string;
  currency: string;
  owner: string;
  sender: string;
  consignee: string;
  origin_address_line1: string;
  origin_address_line2: string;
  origin_city: string;
  origin_country: string;
  destination_address_line1: string;
  destination_address_line2: string;
  destination_city: string;
  destination_country: string;
  modified: string;
  creation: string;
  posting_date: string;
  posting_time: string;
  delivery_due_date: string;
  delivery_time: string;
  originAddress: string;
  destinationAddress: string;
  shipping_service: string;
  total_cod: number;
  scans: [];
}

export interface ResponseProps {
  setError: any;
  setNetworkError: any;
  setSuccess: any;
}

const User = () => {
  const [error, setError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
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
          setNetworkError={setNetworkError}
        />
      </div>
      <div className="flex-grow flex">
        <AnimatePresence mode="wait">
          {networkError ? (
            <motion.div
              key="network-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex justify-center items-center"
            >
              <NetworkError
                setError={setError}
                setNetworkError={setNetworkError}
                setSuccess={setSuccess}
              />
            </motion.div>
          ) : success === true ? (
            <motion.div
              key={`success-${trackingData?.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full 2xl:flex 2xl:justify-center 2xl:items-center"
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
              <Error
                setError={setError}
                setNetworkError={setNetworkError}
                setSuccess={setSuccess}
              />
            </motion.div>
          ) : success === null && !networkError && !error ? (
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
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default User;
