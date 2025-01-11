import { axios } from "@/lib/axios";

export const getProducts = async (categoryId: string) => {
  const response = await axios.get(`getAllProducts/${categoryId}`);
  return response.data;
};
