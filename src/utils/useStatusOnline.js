import { useState, useEffect } from "react";

const useStatusOnline = () => {
  // initialize from navigator.onLine when available; default to true in non-browser env
  const initial = typeof navigator !== "undefined" ? navigator.onLine : true;
  const [isOnline, setIsOnline] = useState(initial);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // cleanup: remove listeners on unmount
    
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useStatusOnline;