import { login } from "@/app/ngadmin/login/actions";
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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(null);

    const { error } = await login(formData);
    if (error) {
      setIsLoading(false);
      setFormError(error);
      return;
    }
    setIsLoading(false);
    return router.push("/ngadmin");
  };

  return {
    handleLoginSubmit,
    handleInput,
    isLoading,
    formData,
    formError,
  };
}

export default useLoginForm;
