import CouponForm from "@/components/coupon/CouponForm";
import React from "react";

const CouponsPage = () => {
  const handleAddCoupon = async (
    code: string,
    discount: string,
    expire: string
  ) => {
    console.log("Add coupon", code, discount, expire);
  };
  return (
    <div className="text-right">
      <h1 className="text-3xl font-bold">الكوبونات</h1>
      <CouponForm handleAddCoupon={handleAddCoupon} />
    </div>
  );
};

export default CouponsPage;
