import React, { useEffect, useState } from "react";

export default function ButtonScrollTop() {
  const [display, setDisplay] = useState(window.scrollY > 0);
  useEffect(() => {
    function handleScroll() {
      setDisplay(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleClickScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div
      onClick={handleClickScroll}
      className={`${
        display ? "fixed" : "hidden"
      } right-0  z-50 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-[#28b1ff] rounded-full top-1/2 text-white cursor-pointer`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
}
