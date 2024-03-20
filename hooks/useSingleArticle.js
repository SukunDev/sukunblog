import { getTableContent } from "@/utils/heper";
import React, { useState } from "react";

function useSingleArticle({ post }) {
  const tableContent = getTableContent(`<div>${post.content}</div>`);
  const [tableOfContentStatus, setTableOfContentStatus] = useState(true);

  const handleTableOfContent = () => {
    setTableOfContentStatus(!tableOfContentStatus);
  };

  return {
    handleTableOfContent,
    tableContent,
    tableOfContentStatus,
  };
}

export default useSingleArticle;
