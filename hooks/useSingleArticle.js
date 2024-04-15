import { getTableContent } from "@/utils/heper";
import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

function useSingleArticle({ post }) {
  const tableContent = getTableContent(`<div>${post.content}</div>`);
  const [tableOfContentStatus, setTableOfContentStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleTableOfContent = () => {
    setTableOfContentStatus(!tableOfContentStatus);
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      hljs.highlightAll();
    }
  }, [isLoading]);

  return {
    handleTableOfContent,
    tableContent,
    tableOfContentStatus,
  };
}

export default useSingleArticle;
