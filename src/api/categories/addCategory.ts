import { axios } from "@/lib/axios";

export const addCategory = async (title: string, image: File) => {
  const { data } = await axios.post(
    "/addCategory",
    { title, image },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data.data;
};
