"use client";

import Image from "next/image";

const Success = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 items-center md:items-baseline lg:space-x-16 xl:space-x-24 space-y-10 md:space-y-0 2xl:justify-center">
      <div className="h-[550px] md:h-[600px] w-full md:w-[25rem] relative lg:w-[31.25rem] 2xl:w-[43.75rem] rounded-xl border-2">
        <div className="p-5">
          <h1 className="font-bold text-[#1F2937] text-sm md:">
            453200001635333
          </h1>
          <h1 className="text-[#6B7280] mt-2" style={{ letterSpacing: "0.5%" }}>
            <span>Last updated 16/12/2023</span> <span>11:33 AM</span>
          </h1>
          {/* details section */}
          <div className="px-5 mt-10 flex flex-col items-center space-y-7 md:space-y-10">
            {/* sender */}
            <div className="flex items-center justify-between w-full font-medium text-sm md text-sm:md:">
              <div className="flex items-center space-x-3">
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
              <div>
                <h1 className="text-[#1F2937]">Mohamed Manna</h1>
              </div>
            </div>

            {/* consignee */}
            <div className="flex items-center justify-between w-full font-medium text-sm md text-sm:md:">
              <div className="flex items-center space-x-3">
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
              <div>
                <h1 className="text-[#1F2937]">Mohamed Manna</h1>
              </div>
            </div>

            {/* origin address */}
            <div className="flex items-center justify-between w-full font-medium text-sm md text-sm:md:">
              <div className="flex items-center space-x-3">
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
              <div>
                <h1 className="text-[#1F2937]">
                  Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt
                </h1>
              </div>
            </div>

            {/* destination address */}
            <div className="flex items-center justify-between w-full font-medium text-sm md text-sm:md:">
              <div className="flex items-center space-x-3">
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
              <div>
                <h1 className="text-[#1F2937]">
                  Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt
                </h1>
              </div>
            </div>

            {/* shipping service */}
            <div className="flex items-center justify-between w-full font-medium text-sm md text-sm:md:">
              <div className="flex items-center space-x-3">
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
              <div>
                <h1 className="text-[#1F2937]">Express Service</h1>
              </div>
            </div>
          </div>
        </div>
        {/* total amount */}
        <div className="bg-[#F8FAFC] text-sm md:text-lg font-medium flex items-center justify-between px-10 py-7 rounded-b-xl absolute bottom-0 w-full">
          <div className="flex items-center space-x-3">
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
          <div>
            <h1 className="text-[#1F2937]">100 EGP</h1>
          </div>
        </div>
      </div>

      {/* timeline section */}
      <div className="py-5 h-[495px]">
        <h1 className="font-bold text-[#1F2937] text-center md:text-justify text-sm md:">
          TIMELINE
        </h1>

        {/* timeline div */}
        <div className="mt-7 space-y-2">
          <div className="flex space-x-7">
            <div
              className="text-sm font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              <h1>12:05PM</h1>
              <h1>Dec 16, 2023</h1>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full h-[0.5rem] w-[0.5rem] bg-[#9CA3AF]"></div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[98px]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment created
                </h1>
                <h1 className="font-medium text-[#6B7280]">
                  Shipment Description
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/not-found.png"
                    alt="default-home"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-[0.938rem] font-semibold text-[#1F2937]">
                  Abdo Saeed
                </h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div
              className="text-sm font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              <h1>12:05PM</h1>
              <h1>Dec 16, 2023</h1>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full h-[0.5rem] w-[0.5rem] bg-[#9CA3AF]"></div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[98px]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment created
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/not-found.png"
                    alt="default-home"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-[0.938rem] font-semibold text-[#1F2937]">
                  Abdo Saeed
                </h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div
              className="text-sm font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              <h1>12:05PM</h1>
              <h1>Dec 16, 2023</h1>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full h-[0.5rem] w-[0.5rem] bg-[#9CA3AF]"></div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[98px]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment created
                </h1>
                <h1 className="font-medium text-[#6B7280]">
                  Shipment Description
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/not-found.png"
                    alt="default-home"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-[0.938rem] font-semibold text-[#1F2937]">
                  Abdo Saeed
                </h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div
              className="text-sm font-medium text-[#6B7280]"
              style={{ letterSpacing: "0.5%" }}
            >
              <h1>12:05PM</h1>
              <h1>Dec 16, 2023</h1>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full h-[0.5rem] w-[0.5rem] bg-[#9CA3AF]"></div>
              <div className="bg-[#E5E7EB] w-[0.100rem] h-[98px]"></div>
            </div>

            <div className="space-y-4" style={{ letterSpacing: "0.5%" }}>
              <div className="space-y-1">
                <h1 className="font-semibold text-[#1F2937]">
                  Shipment created
                </h1>
                <h1 className="font-medium text-[#6B7280]">
                  Shipment Description
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[1.125rem] h-[1.125rem] rounded-full relative">
                  <Image
                    fill
                    src="/not-found.png"
                    alt="default-home"
                    className="object-cover"
                  />
                </div>
                <h1 className="text-[0.938rem] font-semibold text-[#1F2937]">
                  Abdo Saeed
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
