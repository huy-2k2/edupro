import { useEffect, useState } from "react";

function useResize(point = 768) {
  const [size, setSize] = useState(window.innerWidth >= point);
  useEffect(() => {
    function handleResize(e) {
      setSize(e.target.innerWidth >= point);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [point]);
  return size;
}
export default useResize;
