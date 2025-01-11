import { axios } from "@/lib/axios";

export interface ProductTypes {
  title: string;
  images: string[];
  description: string;
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  imageCover: string;
  category: string;
  subCategory: string;
  colors: string[];
  installationService: {
    price: number;
  };
}

export const addProduct = async (product: ProductTypes) => {
  const response = await axios.post("addProduct", { ...product });
  return response.data;
};
