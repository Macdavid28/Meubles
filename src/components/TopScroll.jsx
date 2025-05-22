import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export const TopScroll = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-9 right-5 z-50 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-black/50 p-2 shadow-md rounded-full cursor-pointer"
        >
          <ArrowUpIcon className="w-6 text-white" />
        </button>
      )}
    </div>
  );
};
