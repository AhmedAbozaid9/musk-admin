import { CategoryTypes } from "@/api/categories/getCategories";
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
  categories: CategoryTypes[];
  handleDelete: (id: string) => Promise<void>;
}

const CategoryTable = ({ categories, handleDelete }: CouponTableProps) => {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-right">الصورة</TableHead>
          <TableHead className="font-medium text-right">الاسم </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>
              <img
                src={category.image}
                alt={category.title}
                className="w-24 h-24 rounded-md object-cover"
              />
            </TableCell>
            <TableCell className="lg:w-[80%]"> {category.title} </TableCell>

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
                      onClick={() => handleDelete(category.id)}
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

export default CategoryTable;
