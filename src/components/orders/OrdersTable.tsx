import { CouponTypes } from "@/api/coupons/getCoupons";
import { OrderTypes } from "@/api/orders/getOrders";
import { Eye, Pencil, Trash2 } from "lucide-react";
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
  orders: OrderTypes[];
}

const OrdersTable = ({ orders }: CouponTableProps) => {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-right">رقم الطلب</TableHead>
          <TableCell className="font-medium text-right">تاريخ الطلب</TableCell>
          <TableCell className="font-medium text-right">
            تاريخ التوصيل
          </TableCell>
          <TableCell className="font-medium text-right">طريقة الدفع</TableCell>
          <TableCell className="font-medium text-right">
            التكلفة الكلية
          </TableCell>
          <TableCell className="font-medium text-right">الحالة</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order._id}>
            <TableCell>{order.orderNumber}#</TableCell>
            <TableCell>{order.createdAt}</TableCell>
            <TableCell>{order.deliveryDate}</TableCell>
            <TableCell>{order.paymentMethod}</TableCell>
            <TableCell>{order.totalOrderPrice}</TableCell>
            <TableCell>
              {order.orderStatus !== "Pending" ? (
                <p className="text-nowrap px-4 py-2 text-white bg-green-400 rounded-full text-center font-medium max-w-24 text-xs">
                  تم التوصيل
                </p>
              ) : (
                <p className="text-nowrap px-4 py-2 text-white bg-orange-400 rounded-full text-center font-medium max-w-24 text-xs">
                  جاري التوصيل
                </p>
              )}
            </TableCell>
            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="p-2">
                      <Eye
                        size={20}
                        className="text-gray-500 hover:text-gray-700"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>عرض الطلب</p>
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

export default OrdersTable;
