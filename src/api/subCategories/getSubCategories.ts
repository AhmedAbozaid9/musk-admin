import { axios } from "@/lib/axios";

export interface CategoryTypes {
  title: string;
  image: string;
  _id: string;
}

export const getSubCategories = async (
  id: string
): Promise<CategoryTypes[]> => {
  const { data } = await axios.get(`/getAllSubCategories/${id}`);
  return data.result;
};
