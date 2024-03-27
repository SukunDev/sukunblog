import { deletePost } from "@/utils/serverAction";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-toastify";

export default function useAllArticleAdmin() {
  const router = useRouter();

  const handleDeleteButton = async (id) => {
    const { error } = await deletePost({ id });
    if (error) {
      toast("failed to delete posts", { type: "error" });
      return;
    }
    router.refresh();
  };

  const handlePagination = (e) => {
    if (e === 1) {
      router.push("/ngadmin/posts");
      return;
    }
    router.push("/ngadmin/posts/" + e);
  };

  return {
    handleDeleteButton,
    handlePagination,
  };
}
