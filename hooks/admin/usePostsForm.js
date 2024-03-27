import { useAdminThemeContext } from "@/components/admin/adminProviders";
import { insertPost, updatePost } from "@/utils/serverAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function usePostsForm({ post }) {
  const router = useRouter();
  const { data } = useAdminThemeContext();
  const [formData, setFormData] = useState({
    user_id: data.user.id,
    user_email: data.user.email,
    title: post?.title,
    content: post?.content,
    slug: post?.slug,
    categories_id: post?.categories.id,
    meta_description: post?.meta_description,
    thumbnail: post?.thumbnail,
    visibility: post?.visibility,
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === "title") {
      createSlug(fieldValue);
    }

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const createSlug = (title) => {
    const slug = title.toLowerCase().replaceAll(" ", "-");
    setFormData((prevState) => ({
      ...prevState,
      slug: slug,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.thumbnail) {
      toast("Tumbnails is empty", { type: "error" });
    }

    if (!post) {
      const { data, error } = await insertPost({ formData });
      if (error) {
        toast(error.message, { type: "error" });
        return;
      }
      toast("Article berhasil di simpan", { type: "success" });
    } else {
      const { data, error } = await updatePost({ formData, post_id: post.id });
      if (error) {
        toast(error.message, { type: "error" });
        return;
      }
      toast("Article berhasil di rubah", { type: "success" });
    }
    router.push("/ngadmin/posts");
    router.refresh();
  };

  return {
    handleInput,
    handleSubmit,
    formData,
  };
}

export default usePostsForm;
