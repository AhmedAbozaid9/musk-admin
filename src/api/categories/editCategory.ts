import { axios } from "@/lib/axios";

export const editCategory = async (
  id: string,
  title: string,
  image: File | string
) => {
  const response = await axios.post(
    `/updateCategoryById/${id}`,
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
