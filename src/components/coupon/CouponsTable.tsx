import { CouponTypes } from "@/api/coupons/getCoupons";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CouponTableProps {
  coupons: CouponTypes[];
  handleDelete: (id: string) => Promise<void>;
}

const CouponsTable = ({ coupons, handleDelete }: CouponTableProps) => {
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
            <TableCell>
              <TooltipProvider>
                {" "}
                {/* Adjust styling as needed */}
                {/* Edit Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="p-2">
                      <Pencil
                        size={20}
                        className="text-gray-500 hover:text-gray-700"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>تعديل</p>
                  </TooltipContent>
                </Tooltip>
                {/* Delete Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => handleDelete(coupon._id)}
                      variant="ghost"
                      className="p-2"
                    >
                      <Trash2
                        size={20}
                        className="text-gray-500 hover:text-gray-700"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ازالة</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CouponsTable;
