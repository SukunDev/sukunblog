import React, { useEffect, useState } from "react";

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scroll = (event) => {
      setScrollY(window.scrollY);
    };
    scroll();
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return scrollY;
}

export default useScroll;
