import React, { useEffect, useState } from "react";

export default function CountAuto({ max, time = 10 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setInterval(() => {
      if (count < max)
        setCount((prev) => prev + Math.floor((max - prev) / 10 + 1));
    }, time);
    return () => clearInterval(timeout);
  });
  return (
    <span>{new Intl.NumberFormat().format(count).split(",").join(".")}</span>
  );
}
