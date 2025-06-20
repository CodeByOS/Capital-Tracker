import { useState } from "react";
import { toast } from "sonner";

// Custom hook to fetch data with loading and error handling
const useFetch = (callback) => {
  // State to hold the fetched data
  const [data, setData] = useState(undefined);

  // State to show loading status
  const [loading, setLoading] = useState(false);

  // State to store any error that occurs
  const [error, setError] = useState(null);

  // Function to call the fetch logic
  const fn = async (...args) => {
    setLoading(true);  // Start loading
    setError(null);    // Reset error before request

    try {
      const result = await callback(...args); // Call the provided function
      setData(result);                        // Save the result
    } catch (err) {
      setError(err);                          // Save the error
      toast.error(err.message);              // Show error toast
    } finally {
      setLoading(false);                     // Stop loading
    }
  };

  // Return everything needed to use the hook
  return {
    data,     // The fetched data
    loading,  // Loading state
    error,    // Any error that occurred
    fn,       // Function to trigger the fetch
    setData,  // Optional manual data update
  };
};

export default useFetch;
