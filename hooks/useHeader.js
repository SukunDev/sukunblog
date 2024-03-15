import { useThemeContext } from "@/hooks/providers";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function useHeader() {
  const pathname = usePathname();
  const { data, handleDataChange } = useThemeContext();

  const handleButtonMenu = () => {
    handleDataChange({ menuOpened: !data.menuOpened });
  };

  useEffect(() => {
    if (data.menuOpened) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [data]);

  return { handleButtonMenu, pathname, data };
}

export default useHeader;
