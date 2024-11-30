import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  error: boolean;
  setError: any;
  setSuccess: any;
  setTrackingData: any;
  setNetworkError: any;
  setIsSubmitted: any;
}

const Search = ({
  error,
  setError,
  setSuccess,
  setTrackingData,
  setNetworkError,
  setIsSubmitted,
}: Props) => {
  const [trackingId, setTrackingId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ((error && trackingId !== "") || (error && trackingId == "")) {
      setError(false);
      setIsSubmitted(false);
    }
    if (trackingId !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [trackingId]);

  const handleTrackingIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingId(e.target.value);
    if (e.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitted(true);
    setSuccess(null);
    setError(false);
    setTrackingData(null);

    try {
      const response = await axios.post(
        "/api/get",
        {
          doctype: "AWB",
          filters: {
            name: ["like", `%${trackingId}%`],
          },
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setError(false);
        setSuccess(true);
        setTrackingData(response.data.message);
      }
    } catch (error: any) {
      if (error.response?.status === 500) {
        setNetworkError(true);
        console.log("Internal Server Error");
      } else if (error.response?.status !== 500) {
        setError(true);
      } else {
        console.error("Unknown error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] px-5 sm:px-0 h-[6.875rem] flex flex-col justify-center items-center">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="flex space-x-3 md:space-x-6">
          <div
            tabIndex={0}
            id="here"
            className={`flex items-center w-[60vw] sm:w-[25rem] md:w-[31.25rem] lg:w-[37.5rem] shadow-sm bg-white h-full space-x-2 border-2 p-3 rounded-lg ${
              !error
                ? "focus-within:border-primary focus-within:ring-4 focus-within:ring-[#e4edfc]"
                : "ring-4 ring-[#f6d5d5] border-error"
            } `}
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
              <CircularProgress size="0.875rem" sx={{ color: "white" }} />
            ) : (
              <h1>Track</h1>
            )}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            error ? "max-h-6" : "max-h-0"
          }`}
        >
          {error && (
            <h1 className="text-error font-medium text-sm">
              Please enter a valid AWB
            </h1>
          )}
        </div>
      </form>
    </div>
  );
};
export default Search;
