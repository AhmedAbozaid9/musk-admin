import { CouponTypes } from "@/api/coupons/getCoupons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface CouponTableProps {
  coupons: CouponTypes[];
}

const CouponsTable = ({ coupons }: CouponTableProps) => {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-right">الكوبون</TableHead>
          <TableHead className="font-medium text-right">نسبة الخصم</TableHead>
          <TableCell className="font-medium text-right">
            تاريخ الانشاء
          </TableCell>
          <TableCell className="font-medium text-right">
            تاريخ الانتهاء
          </TableCell>
          <TableCell className="font-medium text-right">الحالة</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coupons.map((coupon) => (
          <TableRow key={coupon._id}>
            <TableCell> {coupon.code} </TableCell>
            <TableCell>{coupon.discount}%</TableCell>
            <TableCell>
              {new Date(coupon.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {new Date(coupon.expire).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {coupon.isActive ? (
                <p className="px-4 py-2 text-white bg-green-400 rounded-full text-center font-medium max-w-24 text-xs">
                  صالح
                </p>
              ) : (
                <p className="px-4 py-2 text-white bg-red-400 rounded-full text-center font-medium max-w-24 text-xs">
                  غير صالح
                </p>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CouponsTable;
