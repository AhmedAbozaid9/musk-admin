import { axios } from "@/lib/axios";

export interface CategoryTypes {
  title: string;
  image: string;
  _id: string;
}

export const getCategories = async (): Promise<CategoryTypes[]> => {
  const { data } = await axios.get("/getAllCategories");
  return data.result;
};
