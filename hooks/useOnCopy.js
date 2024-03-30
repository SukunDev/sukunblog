import React, { useState } from "react";

export default function useOnCopy({ content }) {
  const [onCopy, setOnCopy] = useState(false);

  const handleClick = async () => {
    setOnCopy(true);
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setOnCopy(false);
    }, 1000);
  };
  return { onCopy, handleClick };
}
