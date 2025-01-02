import { axios } from "@/lib/axios";

export const addCoupon = async (
  code: string,
  discount: string,
  expire: string
) => {
  const { data } = await axios.post("/addCoupon", { code, discount, expire });
  return data.data;
};
