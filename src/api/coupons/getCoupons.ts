import { axios } from "@/lib/axios";

export interface CouponTypes {
  _id: string;
  code: string;
  discount: number;
  expire: string;
  isActive: boolean;
  createdAt: string;
}

export const getCoupons = async (): Promise<CouponTypes[]> => {
  const { data } = await axios.get("/getAllCoupons");
  return data.result;
};
