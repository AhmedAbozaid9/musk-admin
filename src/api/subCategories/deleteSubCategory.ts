import { axios } from "@/lib/axios";

export const deleteSubCategory = async (id: string) => {
  const response = await axios.delete(`deleteSubCategoryById/${id}`);
  return response.data;
};
