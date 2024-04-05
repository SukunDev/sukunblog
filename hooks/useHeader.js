import { useThemeContext } from "@/hooks/providers";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function useHeader() {
  const pathname = usePathname();
  const { data } = useThemeContext();
  const [menuOpened, setMenuOpened] = useState(false);

  const handleButtonMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    if (menuOpened) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [menuOpened]);

  return { handleButtonMenu, pathname, menuOpened, data };
}

export default useHeader;
