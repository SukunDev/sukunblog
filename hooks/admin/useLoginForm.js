import { login } from "@/utils/serverAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function useLoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setFormError(null);

    const { error } = await login({ formData });
    if (error) {
      setIsLoading(false);
      setFormError(error);
      return;
    }
    router.push("/ngadmin");
  };

  return {
    handleInput,
    handleSubmit,
    formData,
    isLoading,
    formError,
  };
}

export default useLoginForm;
