import { useAdminThemeContext } from "@/components/admin/adminProviders";
import { insertPost, updatePost } from "@/utils/serverAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function usePostsForm({ post }) {
  const router = useRouter();
  const { data } = useAdminThemeContext();
  const [metaCharacterCount, setMetaCharacterCount] = useState(0);
  const [formData, setFormData] = useState({
    user_id: data.user.id,
    user_email: data.user.email,
    title: post?.title,
    content: post?.content,
    slug: post?.slug,
    categories_id: post?.categories.id,
    meta_description: post?.meta_description,
    meta_keywords: post?.meta_keywords,
    thumbnail: post?.thumbnail,
    visibility: post?.visibility,
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === "title") {
      createSlug(fieldValue);
    }
    if (fieldName === "meta_description") {
      countMeta(e);
    }

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const countMeta = (e) => {
    var text = e.target.value;
    setMetaCharacterCount(text.trim().length);
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
    metaCharacterCount,
  };
}

export default usePostsForm;
