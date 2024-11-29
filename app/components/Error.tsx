import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-7 flex-grow">
      <div className="w-[15.625rem] h-[9rem] relative">
        <Image
          fill
          src="/no-results.png"
          alt="no-results"
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-[#000000]">No results found</h1>
        <h2
          style={{ letterSpacing: "0.5%" }}
          className="text-sm text-[#838282]"
        >
          No results found. Please try again.
        </h2>
      </div>
      <div>
        <Link
          href="/"
          style={{ letterSpacing: "0.5%" }}
          className="font-semibold text-primary text-[0.938rem] hover:underline"
        >
          Retry
        </Link>
      </div>
    </div>
  );
};

export default Error;
