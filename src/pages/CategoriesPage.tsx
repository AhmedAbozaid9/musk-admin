import { addCategory } from "@/api/categories/addCategory";
import { deleteCategory } from "@/api/categories/deleteCategory";
import { editCategory } from "@/api/categories/editCategory";
import { getCategories } from "@/api/categories/getCategories";
import CategoryForm from "@/components/category/CategoryForm";
import CategoryTable from "@/components/category/CategoryTable";
import Loading from "@/components/general/Loading";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const CategoriesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: categories,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const handleAddCategory = async (title: string, image: File) => {
    try {
      await addCategory(title, image);
      toast.success("تم اضافة القسم");
      refetch();
    } catch (error) {
      toast.error("حدث خطاء ما");
    }
  };

  const handleEditCategory = async (
    id: string,
    title: string,
    image: File | string
  ) => {
    console.log(id, title, image);
    try {
      await editCategory(id, title, image);
      toast.success("تم تعديل القسم");
      refetch();
    } catch (error) {
      toast.error("حدث خطاء ما");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      toast.success("تم حذف القسم");
      refetch();
    } catch (err) {
      toast.error("حدث خطاء ما");
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full text-right">
      {" "}
      <h1 className="text-3xl font-bold text-right">الاقسام</h1>
      <Button onClick={() => setIsOpen(true)} className="px-8 mt-8 mb-4">
        <Plus /> اضف قسم
      </Button>
      <CategoryForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAddCategory={handleAddCategory}
      />
      {categories && categories.length > 0 ? (
        <CategoryTable
          handleEdit={handleEditCategory}
          handleDelete={handleDeleteCategory}
          categories={categories}
        />
      ) : (
        <p>لا توجد اقسام</p>
      )}
    </div>
  );
};

export default CategoriesPage;
