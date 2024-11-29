"use client";

import Image from "next/image";
import { trackingDataProps } from "./User";

interface Props {
  trackingData: trackingDataProps | null;
}

const Success = ({ trackingData }: Props) => {
  const formatUpdateTime = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const am_or_pm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return `${day}/${month}/${year} ${formattedHours}:${minutes} ${am_or_pm}`;
  };

  const formatDate = (dateString: string): JSX.Element => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const am_or_pm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    const actualTime = `${formattedHours}:${minutes} ${am_or_pm}`;
    const actualDate = `${month} ${day}, ${year}`;

    return (
      <>
        <h1>{actualTime}</h1>
        <h1>{actualDate}</h1>
      </>
    );
  };

  const capitalizeFirstLetter = (city: string): string => {
    if (!city) return "";
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  };

  return (
    <div className="flex flex-col px-7 md:px-10 py-10 md:flex-row md:space-x-10 items-center md:items-baseline lg:space-x-16 xl:space-x-24 space-y-10 md:space-y-0">
      <div className="h-[28.125rem] md:h-[31.875rem] lg:h-[34.375rem] w-full md:w-[25rem] relative lg:w-[28.563rem] rounded-xl border-2">
        <div className="p-5">
          <h1 className="font-bold text-[#1F2937] lg:text-lg text-sm">
            {trackingData?.name}
          </h1>
          <h1
            className="text-[#6B7280] mt-2 lg:text-sm text-xs"
            style={{ letterSpacing: "0.5%" }}
          >
            <span>
              Last updated {formatUpdateTime(trackingData?.modified!)}
            </span>
          </h1>
          {/* details section */}
          <div className="lg:px-5 mt-10 flex flex-col w-full space-y-7 md:space-y-10">
            {/* sender */}
            <div className="flex w-full font-medium justify-between md:justify-normal items-start text-xs lg:text-sm">
              <div className="flex items-center space-x-3 flex-shrink-0 lg:w-[53%] 2xl:w-[53%] md:w-[60%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66663 4.66663H11.3333V11.3333"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.66663 11.3333L11.3333 4.66663"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1 className="text-[#6B7280]">Sender</h1>
              </div>
              <div className="md:flex-grow">
                <h1 className="text-[#1F2937]">
                  {capitalizeFirstLetter(trackingData?.sender_name || "")}
                </h1>
              </div>
            </div>

            {/* consignee */}
            <div className="flex w-full items-start justify-between md:justify-normal font-medium text-xs lg:text-sm">
              <div className="flex items-center space-x-3 flex-shrink-0 lg:w-[53%] 2xl:w-[53%] md:w-[60%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 14V12.6667C12.6667 11.9594 12.3858 11.2811 11.8857 10.781C11.3856 10.281 10.7073 10 10 10H6.00004C5.2928 10 4.61452 10.281 4.11442 10.781C3.61433 11.2811 3.33337 11.9594 3.33337 12.6667V14"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1 className="text-[#6B7280]">Consignee</h1>
              </div>
              <div className="md:flex-grow">
                <h1 className="text-[#1F2937]">{trackingData?.consignee}</h1>
              </div>
            </div>

            {/* origin address */}
            <div className="flex items-start justify-between md:justify-normal w-full font-medium text-xs lg:text-sm">
              <div className="flex items-center space-x-3 flex-shrink-0 lg:w-[53%] 2xl:w-[53%] md:w-[60%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.33337V10.6667"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 6L8.00004 10.6667L3.33337 6"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.00004 14.6667C8.36823 14.6667 8.66671 14.3682 8.66671 14C8.66671 13.6319 8.36823 13.3334 8.00004 13.3334C7.63185 13.3334 7.33337 13.6319 7.33337 14C7.33337 14.3682 7.63185 14.6667 8.00004 14.6667Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1 className="text-[#6B7280]">Origin Address</h1>
              </div>
              <div className="text-[#1F2937] md:flex-grow">
                <h1>{trackingData?.origin_address_line1}</h1>
                <h1>{trackingData?.origin_address_line1}</h1>
                <h1>
                  {capitalizeFirstLetter(trackingData?.origin_city || "")}
                </h1>
                <h1>{trackingData?.origin_country}</h1>
              </div>
            </div>

            {/* destination address */}
            <div className="flex items-start justify-between md:justify-normal w-full font-medium text-xs lg:text-sm">
              <div className="flex items-center space-x-3 flex-shrink-0 lg:w-[53%] 2xl:w-[53%] md:w-[60%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 6.66671C13.3333 10.6667 7.99996 14.6667 7.99996 14.6667C7.99996 14.6667 2.66663 10.6667 2.66663 6.66671C2.66663 5.25222 3.22853 3.89567 4.22872 2.89547C5.22892 1.89528 6.58547 1.33337 7.99996 1.33337C9.41445 1.33337 10.771 1.89528 11.7712 2.89547C12.7714 3.89567 13.3333 5.25222 13.3333 6.66671Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1 className="text-[#6B7280]">Destination Address</h1>
              </div>
              <div className="text-[#1F2937] md:flex-grow">
                <h1>{trackingData?.destination_address_line1}</h1>
                <h1>{trackingData?.destination_address_line1}</h1>
                <h1>
                  {capitalizeFirstLetter(trackingData?.destination_city || "")}
                </h1>
                <h1>{trackingData?.destination_country}</h1>
              </div>
            </div>

            {/* shipping service */}
            <div className="flex items-start justify-between md:justify-normal w-full font-medium text-xs lg:text-sm">
              <div className="flex items-center space-x-3 flex-shrink-0 lg:w-[53%] 2xl:w-[53%] md:w-[60%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 12H2.00004C1.60004 12 1.33337 11.7333 1.33337 11.3333V4.66667C1.33337 4.26667 1.60004 4 2.00004 4H8.66671C9.06671 4 9.33337 4.26667 9.33337 4.66667V12"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33337 6H12L14.6667 8.66667V11.3333C14.6667 11.7333 14.4 12 14 12H12.6667"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.66671 13.3333C5.40309 13.3333 6.00004 12.7363 6.00004 12C6.00004 11.2636 5.40309 10.6666 4.66671 10.6666C3.93033 10.6666 3.33337 11.2636 3.33337 12C3.33337 12.7363 3.93033 13.3333 4.66671 13.3333Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H6"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3333 13.3333C12.0697 13.3333 12.6667 12.7363 12.6667 12C12.6667 11.2636 12.0697 10.6666 11.3333 10.6666C10.597 10.6666 10 11.2636 10 12C10 12.7363 10.597 13.3333 11.3333 13.3333Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1 className="text-[#6B7280]">Shipping Service</h1>
              </div>
              <div className="md:flex-grow">
                <h1 className="text-[#1F2937]">
                  {trackingData?.shipping_service}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* total amount */}
        <div className="bg-[#F8FAFC] text-xs lg:text-sm font-medium flex items-start justify-between md:justify-normal px-5 lg:px-10 py-6 rounded-b-xl absolute bottom-0 w-full">
          <div className="flex items-center space-x-3 flex-shrink-0 lg:w-[53%] 2xl:w-[53%] md:w-[60%]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66663 1.33337V14.6667L3.99996 14L5.33329 14.6667L6.66663 14L7.99996 14.6667L9.33329 14L10.6666 14.6667L12 14L13.3333 14.6667V1.33337L12 2.00004L10.6666 1.33337L9.33329 2.00004L7.99996 1.33337L6.66663 2.00004L5.33329 1.33337L3.99996 2.00004L2.66663 1.33337Z"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 5.33337H6.66671C6.31309 5.33337 5.97395 5.47385 5.7239 5.7239C5.47385 5.97395 5.33337 6.31309 5.33337 6.66671C5.33337 7.02033 5.47385 7.35947 5.7239 7.60952C5.97395 7.85956 6.31309 8.00004 6.66671 8.00004H9.33337C9.687 8.00004 10.0261 8.14052 10.2762 8.39057C10.5262 8.64061 10.6667 8.97975 10.6667 9.33337C10.6667 9.687 10.5262 10.0261 10.2762 10.2762C10.0261 10.5262 9.687 10.6667 9.33337 10.6667H5.33337"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11.3333V4.66663"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h1 className="text-[#6B7280]">Total COD Amount</h1>
          </div>
          <div className="md:flex-grow">
            <h1 className="text-[#1F2937]">
              {trackingData?.total_cod} {trackingData?.currency}
            </h1>
          </div>
        </div>
      </div>

      {/* timeline section */}
      <div className="py-5 flex flex-col justify-center items-center h-[30.938rem]">
        <h1 className="font-bold text-[#1F2937] text-sm lg:text-lg">
          TIMELINE
        </h1>

        {/* timeline div */}
        <div className="mt-7 w-full">
          <div className="flex space-x-7">
            <div
              className="lg:text-sm text-xs font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              {formatDate(trackingData?.scans[0].scan_date!)}
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full h-[1.75rem] w-[1.75rem] border border-[#E5E7EB] flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 10.6667H14.6667"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 8.66669V12.6667"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 6.66668V5.33335C13.9998 5.09953 13.938 4.86989 13.821 4.66746C13.704 4.46503 13.5358 4.29692 13.3333 4.18002L8.66667 1.51335C8.46397 1.39633 8.23405 1.33472 8 1.33472C7.76595 1.33472 7.53603 1.39633 7.33333 1.51335L2.66667 4.18002C2.46418 4.29692 2.29599 4.46503 2.17897 4.66746C2.06196 4.86989 2.00024 5.09953 2 5.33335V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L10 13.7267"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 2.84668L11 6.28001"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.19336 4.66669L8.00003 8.00002L13.8067 4.66669"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14.6667V8"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="bg-[#E5E7EB] w-[0.100rem] h-[4.688rem] lg:h-[5.313rem]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1 text-sm lg:text-base">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment created
                </h1>
                <h1 className="font-medium text-[#6B7280]">
                  {trackingData?.status}
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/profile.png"
                    alt="profile"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-sm lg:text-[0.938rem] font-semibold text-[#1F2937]">
                  {trackingData?.scans[0]?.owner}
                </h1>
                <h1 className="text-sm hidden lg:text-[0.938rem] text-wrap font-semibold break-words text-[#1F2937]"></h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div
              className="lg:text-sm text-xs font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              {formatDate(trackingData?.scans[1].scan_date!)}
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full h-[1.75rem] w-[1.75rem] border border-[#E5E7EB] flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 10.6666L12 12L14.6667 9.33331"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 6.66668V5.33335C13.9998 5.09953 13.938 4.86989 13.821 4.66746C13.704 4.46503 13.5358 4.29692 13.3333 4.18002L8.66667 1.51335C8.46397 1.39633 8.23405 1.33472 8 1.33472C7.76595 1.33472 7.53603 1.39633 7.33333 1.51335L2.66667 4.18002C2.46418 4.29692 2.29599 4.46503 2.17897 4.66746C2.06196 4.86989 2.00024 5.09953 2 5.33335V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L10 13.7267"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 2.84668L11 6.28001"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.19336 4.66669L8.00003 8.00002L13.8067 4.66669"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14.6667V8"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[4.688rem] lg:h-[5.313rem]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1 text-sm lg:text-base">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment picked-up
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/profile.png"
                    alt="profile"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-sm lg:text-[0.938rem] font-semibold text-[#1F2937]">
                  {trackingData?.scans[1]?.owner}
                </h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div
              className="lg:text-sm text-xs font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              {formatDate(trackingData?.scans[2].scan_date!)}
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full h-[1.75rem] w-[1.75rem] border border-[#E5E7EB] flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 6.66668V5.33335C13.9998 5.09953 13.938 4.86989 13.821 4.66746C13.704 4.46503 13.5358 4.29692 13.3333 4.18002L8.66667 1.51335C8.46397 1.39633 8.23405 1.33472 8 1.33472C7.76595 1.33472 7.53603 1.39633 7.33333 1.51335L2.66667 4.18002C2.46418 4.29692 2.29599 4.46503 2.17897 4.66746C2.06196 4.86989 2.00024 5.09953 2 5.33335V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L10 13.7267"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 2.84668L11 6.28001"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.19336 4.66669L8.00003 8.00002L13.8067 4.66669"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14.6667V8"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.3334 12C13.2538 12 14 11.2538 14 10.3334C14 9.41288 13.2538 8.66669 12.3334 8.66669C11.4129 8.66669 10.6667 9.41288 10.6667 10.3334C10.6667 11.2538 11.4129 12 12.3334 12Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5133 11.5133L14.6666 12.6666"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[4.688rem] lg:h-[5.313rem]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1 text-sm lg:text-base">
                <h1 className="font-semibold text-[#1F2937]">
                  Proof of pick-up
                </h1>
                <h1 className="font-medium text-[#6B7280]">
                  {trackingData?.scans[2]?.scan_comment}
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/profile.png"
                    alt="profile"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-sm lg:text-[0.938rem] font-semibold text-[#1F2937]">
                  {trackingData?.scans[2]?.owner}
                </h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div
              className="lg:text-sm text-xs font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              {formatDate(trackingData?.scans[3].scan_date!)}
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full h-[1.75rem] w-[1.75rem] border border-[#E5E7EB] flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33331 12H1.99998C1.59998 12 1.33331 11.7333 1.33331 11.3333V4.66667C1.33331 4.26667 1.59998 4 1.99998 4H8.66665C9.06665 4 9.33331 4.26667 9.33331 4.66667V12"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33331 6H12L14.6666 8.66667V11.3333C14.6666 11.7333 14.4 12 14 12H12.6666"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.66665 13.3334C5.40303 13.3334 5.99998 12.7364 5.99998 12C5.99998 11.2636 5.40303 10.6667 4.66665 10.6667C3.93027 10.6667 3.33331 11.2636 3.33331 12C3.33331 12.7364 3.93027 13.3334 4.66665 13.3334Z"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H6"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3333 13.3334C12.0697 13.3334 12.6667 12.7364 12.6667 12C12.6667 11.2636 12.0697 10.6667 11.3333 10.6667C10.597 10.6667 10 11.2636 10 12C10 12.7364 10.597 13.3334 11.3333 13.3334Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[4.688rem] lg:h-[5.313rem]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1 text-sm lg:text-base">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment on delivery
                </h1>
                <h1 className="font-medium text-[#6B7280]">
                  {trackingData?.scans[3]?.scan_comment}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Success;
