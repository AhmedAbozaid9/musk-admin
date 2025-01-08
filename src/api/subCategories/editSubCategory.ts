import { axios } from "@/lib/axios";

export const editCategory = async (
  id: string,
  title: string,
  image: File | string
) => {
  const response = await axios.post(
    `/updateSubCategoryById/${id}`,
    {
      title,
      image,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
