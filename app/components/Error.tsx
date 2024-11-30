import Image from "next/image";
import Link from "next/link";
import { ResponseProps } from "./User";

const Error = ({
  setError,
  setNetworkError,
  setSuccess,
  setIsSubmitted,
}: ResponseProps) => {
  const resetServer = () => {
    setError(false);
    setNetworkError(false);
    setSuccess(null);
    setIsSubmitted(false);
  };
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-7 flex-grow">
      <div className="w-[15.625rem] h-[9rem] relative">
        <Image
          fill
          priority
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
        <h1
          onClick={resetServer}
          style={{ letterSpacing: "0.5%" }}
          className="font-semibold text-primary cursor-pointer text-[0.938rem] hover:underline"
        >
          Retry
        </h1>
      </div>
    </div>
  );
};

export default Error;
