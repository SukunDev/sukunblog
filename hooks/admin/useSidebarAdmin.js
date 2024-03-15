import { usePathname } from "next/navigation";
import React from "react";

function useSidebarAdmin() {
  const pathname = usePathname();

  return {
    pathname,
  };
}

export default useSidebarAdmin;
