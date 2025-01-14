// import { addCoupon } from "@/api/coupons/addCoupon";
// import { deleteCoupon } from "@/api/coupons/deleteCoupon";
import { getCoupons } from "@/api/coupons/getCoupons";
// import CouponForm from "@/components/coupon/CouponForm";
// import CouponsTable from "@/components/coupon/CouponsTable";
import Loading from "@/components/general/Loading";
import { useQuery } from "@tanstack/react-query";
// import toast from "react-hot-toast";

const CouponsPage = () => {
  const {
    data: coupons,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["coupons"],
    queryFn: getCoupons,
  });
  console.log(coupons);
  // const handleAddCoupon = async (
  //   code: string,
  //   discount: string,
  //   expire: string
  // ) => {
  //   try {
  //     await addCoupon(code, discount, expire);
  //     refetch();
  //     toast.success("تمت الإضافة بنجاح");
  //   } catch (error) {
  //     toast.error("حدث خطأ ما");
  //   }
  // };

  // const handleDeleteCoupon = async (id: string) => {
  //   try {
  //     await deleteCoupon(id);
  //     refetch();
  //     toast.success("تم الحذف بنجاح");
  //   } catch (error) {
  //     toast.error("حدث خطأ ما");
  //   }
  // };
  if (isLoading) return <Loading />;
  return (
    <div className="text-right w-full">
      <h1 className="text-3xl font-bold">الكوبونات</h1>
      {/* <CouponForm handleAddCoupon={handleAddCoupon} />
      {coupons && coupons.length > 0 ? (
        <CouponsTable handleDelete={handleDeleteCoupon} coupons={coupons} />
      ) : (
        <p>لا توجد كوبونات</p>
      )} */}
    </div>
  );
};

export default CouponsPage;
