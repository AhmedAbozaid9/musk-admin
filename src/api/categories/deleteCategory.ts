import { axios } from "@/lib/axios";

export const deleteCategory = async (id: string) => {
  const response = await axios.delete(`deleteCategoryById/${id}`);
  return response.data;
};
