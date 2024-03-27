import { signOut } from "@/utils/serverAction";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function useSidebarAdmin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogOut = async () => {
    setIsLoading(true);
    const { error } = await signOut();
    if (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
    router.push("/");
  };

  return {
    handleLogOut,
    isLoading,
    pathname,
  };
}
