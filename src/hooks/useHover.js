import { useEffect, useRef, useState } from "react";

function useHover(init = false) {
  const [hover, setHover] = useState(init);
  const ref = useRef();
  useEffect(() => {
    const node = ref.current;
    function handleHover() {
      setHover(true);
    }
    function handleUnHover() {
      setHover(false);
    }
    if (node) {
      node.addEventListener("mouseover", handleHover);
      node.addEventListener("mouseout", handleUnHover);
    }
    return () => {
      node.removeEventListener("mouseover", handleHover);
      node.removeEventListener("mouseout", handleUnHover);
    };
  }, [ref]);
  return [hover, ref];
}

export default useHover;
