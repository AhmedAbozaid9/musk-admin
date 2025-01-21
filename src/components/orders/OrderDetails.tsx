import { OrderTypes } from "@/api/orders/getOrders";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";
interface OrderDetailsProps {
  order: OrderTypes;
  handleChangeStatus: () => void;
  showDetails: boolean;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderDetails = ({
  order,
  handleChangeStatus,
  showDetails,
  setShowDetails,
}: OrderDetailsProps) => {
  return (
    <div>
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="text-right max-h-[80dvh] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>تفاصيل الطلب</DialogTitle>
          </DialogHeader>
          <h3 className="text-lg font-semibold">المنتجات</h3>
          <div className="flex flex-col gap-3">
            {order.cartItems.map((product) => (
              <div
                key={product._id}
                className="flex justify-end items-center gap-5 "
              >
                <div className="flex flex-col gap-2">
                  <p>
                    {product.product.title}{" "}
                    <span className="font-semibold">اسم المنتج</span>{" "}
                  </p>
                  <p>
                    {product.price} <span className="font-semibold">السعر</span>{" "}
                  </p>
                  <p>
                    X{product.quantity}{" "}
                    <span className="font-semibold">الكمية</span>
                  </p>
                </div>
                <img
                  className="w-20 h-20 rounded-md"
                  src={product.product.imageCover}
                />
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold">العنوان</h3>
          <div className="flex flex-col gap-3">
            <div>
              {order.addresses[0].fullName}
              <span className="min-w-24 inline-block font-semibold">الاسم</span>
            </div>
            <div>
              {order.addresses[0].addressTitle}
              <span className="min-w-24 inline-block font-semibold">
                اسم العنوان
              </span>
            </div>
            <div>
              {order.addresses[0].region}
              <span className="min-w-24 inline-block font-semibold">
                المنطقة
              </span>
            </div>
            <div>
              {order.addresses[0].detailedAddress}
              <span className="min-w-24 inline-block font-semibold">
                العنوان
              </span>
            </div>
            <div>
              {order.addresses[0].phoneNumber}
              <span className="min-w-24 inline-block font-semibold">
                رقم الهاتف
              </span>
            </div>
          </div>
          <DialogFooter className="flex justify-between w-full ">
            <DialogClose asChild>
              <Button className="mr-auto" type="button" variant="secondary">
                العودة
              </Button>
            </DialogClose>
            <Button>تم التوصيل</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderDetails;
