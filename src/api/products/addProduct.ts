import { axios } from "@/lib/axios";

export interface ProductTypes {
  title: string;
  images: File[];
  description: string;
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  imageCover: File;
  category: string;
  subCategory: string;
  colors: string | string[];
  installationService: {
    price: number;
  };
}

export const addProduct = async (product: ProductTypes) => {
  console.log(product);
  const response = await axios.post(
    "addProduct",
    { ...product },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
