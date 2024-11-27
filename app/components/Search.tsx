import { CircularProgress } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [trackingId, setTrackingId] = useState("");
  const [trackingError, setTrackingError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleTrackingIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingId(e.target.value);
    if (e.target.value === "") {
      setDisabled(true);
      setTrackingError("");
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div className="bg-[#F8FAFC] px-5 sm:px-0 h-[6.875rem] flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="flex space-x-3 md:space-x-6">
        <div
          tabIndex={0}
          id="here"
          className={`flex items-center w-[60vw] sm:w-[25rem] md:w-[31.25rem] lg:w-[37.5rem] bg-white h-full space-x-2 border-2 p-3 rounded-lg ${
            trackingError == "" ? "focus-within:border-primary" : ""
          }  ${
            trackingError == ""
              ? " focus-within:ring-4 focus-within:ring-[CEE0FF]"
              : "ring-4 ring-[#f6d5d5] border-error"
          }" ${trackingError == "" ? "" : "border-error"} `}
        >
          <input
            type="text"
            placeholder="Enter AWB ID"
            required
            id="trackingId"
            name="trackingId"
            value={trackingId}
            onChange={handleTrackingIdChange}
            className="border-none focus:outline-none bg-inherit w-full h-full placeholder:text-[#6B7280] text-[#000000] text-[0.938rem] font-medium"
          />
        </div>

        <button
          type="submit"
          disabled={disabled}
          className="bg-primary flex items-center justify-center space-x-3 disabled:bg-[#60A5FA] px-6 md:px-12 py-3 font-semibold text-[0.938rem] text-white rounded-lg"
        >
          {loading ? (
            <>
              <CircularProgress size="0.875rem" sx={{ color: "white" }} />
              <h1>Tracking</h1>
            </>
          ) : (
            <h1>Track</h1>
          )}
        </button>
      </form>
      <h1 className="text-error font-semibold text-sm">{trackingError}</h1>
    </div>
  );
};
export default Search;
