import { axios } from "@/lib/axios";

export const deleteCoupon = async (id: string) => {
  const response = await axios.delete(`/deleteCouponById/${id}`);
  return response.data;
};
