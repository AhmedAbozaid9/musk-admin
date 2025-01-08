import { axios } from "@/lib/axios";

export const addSubCategory = async (
  category: string,
  title: string,
  image: File
) => {
  const { data } = await axios.post(
    "/addSubCategory",
    { category, title, image },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data.data;
};
