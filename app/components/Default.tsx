import Image from "next/image";

const Default = () => {
  return (
    <div className="flex flex-grow flex-col space-y-7 justify-center items-center">
      <div className="w-[15.625rem] h-[9rem] relative">
        <Image
          fill
          src="/default-home.png"
          alt="default-home"
          className="object-cover"
        />
      </div>
      <h1 className="text-[#6B7280] font-medium">
        Enter a valid AWB ID to display details
      </h1>
    </div>
  );
};
export default Default;
