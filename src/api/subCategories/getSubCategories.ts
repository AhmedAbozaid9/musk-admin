import { axios } from "@/lib/axios";

export interface CategoryTypes {
  title: string;
  image: string;
  id: string;
}

export const getSubCategories = async (): Promise<CategoryTypes[]> => {
  const { data } = await axios.get("/getAllSubCategories");
  return data.result;
};
