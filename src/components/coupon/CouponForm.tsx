import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useForm } from "react-hook-form";

interface CouponFormProps {
  handleAddCoupon: (
    code: string,
    discount: string,
    expire: string
  ) => Promise<void>;
}

interface CouponFormValues {
  code: string;
  discount: string;
  expire: string;
}

const CouponForm = ({ handleAddCoupon }: CouponFormProps) => {
  const { register, handleSubmit } = useForm<CouponFormValues>();
  const [date, setDate] = React.useState<Date>(new Date(Date.now()));
  const formattedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  const onSubmit = (data: CouponFormValues) => {
    handleAddCoupon(data.code, data.discount, formattedDate);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-8 mt-8 mb-4 ">
          <Plus /> اضف كوبون
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>اضف كوبون</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="coupon-form"
          dir="rtl"
          className="flex flex-wrap gap-4 py-4"
        >
          <div className="w-full">
            <Label>الكود</Label>
            <Input
              {...register("code")}
              placeholder="أدخل الكود"
              className="w-full mt-2"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Label>الخصم</Label>
              <Input
                {...register("discount")}
                placeholder="أدخل الخصم"
                className="w-full mt-2"
                required
              />
            </div>
            <div className="w-full">
              <Label>تاريخ الانتهاء</Label>
              <Input
                type="date"
                value={date?.toISOString().split("T")[0]}
                onChange={(e) => setDate(new Date(e.target.value))}
                className="w-full mt-2"
                required
              />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button form="coupon-form" type="submit">
            حفظ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CouponForm;
