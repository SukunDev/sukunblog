import { useThemeContext } from "@/hooks/providers";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function useHeader() {
  const pathname = usePathname();
  const { data } = useThemeContext();
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);

  const handleButtonMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const handleSearchButton = () => {
    setSearchOpened(!searchOpened);
  };

  useEffect(() => {
    if (menuOpened || searchOpened) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [menuOpened, searchOpened]);

  return {
    handleButtonMenu,
    handleSearchButton,
    pathname,
    data,
    menuOpened,
    searchOpened,
  };
}

export default useHeader;
