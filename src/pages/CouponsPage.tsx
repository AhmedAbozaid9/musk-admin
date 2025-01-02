import { addCoupon } from "@/api/coupons/addCoupon";
import CouponForm from "@/components/coupon/CouponForm";
import React from "react";
import toast from "react-hot-toast";

const CouponsPage = () => {
  const handleAddCoupon = async (
    code: string,
    discount: string,
    expire: string
  ) => {
    try {
      await addCoupon(code, discount, expire);
      toast.success("تمت الإضافة بنجاح");
    } catch (error) {
      toast.error("حدث خطأ ما");
    }
  };
  return (
    <div className="text-right">
      <h1 className="text-3xl font-bold">الكوبونات</h1>
      <CouponForm handleAddCoupon={handleAddCoupon} />
    </div>
  );
};

export default CouponsPage;
