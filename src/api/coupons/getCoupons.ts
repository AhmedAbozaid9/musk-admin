import { axios } from "@/lib/axios";

export const getCoupons = async () => {
  const { data } = await axios.get("/getAllCoupons");
  return data.data;
};
