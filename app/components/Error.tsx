import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex-grow flex flex-col justify-center h-screen items-center text-center">
      <div className="w-[15.625rem] h-[9rem] relative">
        <Image
          fill
          src="/no-results.png"
          alt="default-home"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 mt-10">
        <h1 className="text-2xl font-bold text-[#000000]">No results found</h1>
        <h1
          style={{ letterSpacing: "0.5%" }}
          className="text-sm text-[#838282]"
        >
          No results found. Please try again.
        </h1>
      </div>

      <div className="mt-7">
        <a
          href="/"
          style={{ letterSpacing: "0.5%" }}
          className="font-semibold text-primary text-[0.938rem] hover:underline"
        >
          Retry
        </a>
      </div>
    </div>
  );
};
export default Error;
