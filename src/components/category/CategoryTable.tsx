import { CategoryTypes } from "@/api/categories/getCategories";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
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
import CategoryForm from "./CategoryForm";

interface CategoryTableProps {
  categories: CategoryTypes[];
  handleEdit: (
    id: string,
    title: string,
    image: File | string
  ) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

const CategoryTable = ({
  categories,
  handleDelete,
  handleEdit,
}: CategoryTableProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryTypes | null>(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const openEditForm = (category: CategoryTypes) => {
    setSelectedCategory(category);
    setIsEditFormOpen(true);
  };

  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-right">الصورة</TableHead>
          <TableHead className="font-medium text-right">الاسم</TableHead>
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
            <TableCell className="lg:w-[80%]">{category.title}</TableCell>
            <TableCell>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => openEditForm(category)}
                      variant="ghost"
                      className="p-2"
                    >
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
      {isEditFormOpen && selectedCategory && (
        <CategoryForm
          id={selectedCategory.id}
          title={selectedCategory.title}
          image={selectedCategory.image}
          isOpen={isEditFormOpen}
          setIsOpen={setIsEditFormOpen}
          handleEditCategory={handleEdit}
        />
      )}
    </Table>
  );
};

export default CategoryTable;
