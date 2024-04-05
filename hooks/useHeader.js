import { useThemeContext } from "@/hooks/providers";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function useHeader() {
  const pathname = usePathname();
  const { data, handleDataChange } = useThemeContext();
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonMenu = () => {
    handleDataChange({ menuOpened: !data.menuOpened });
  };

  useEffect(() => {
    if (data.menuOpened) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [data.menuOpened]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return { handleButtonMenu, pathname, data, isLoading };
}

export default useHeader;
