import { deleteCategory } from "@/api/categories/deleteCategory";
import { editCategory } from "@/api/categories/editCategory";
import { addSubCategory } from "@/api/subCategories/addSubCategory";
import { getSubCategories } from "@/api/subCategories/getSubCategories";
import CategoryForm from "@/components/category/CategoryForm";
import CategoryTable from "@/components/category/CategoryTable";
import Loading from "@/components/general/Loading";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const SubCategoriesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id: categoryId } = useParams();
  const {
    data: categories,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["subCategories", categoryId],
    queryFn: () => getSubCategories(categoryId as string),
  });

  const navigate = useNavigate();

  const handleAddCategory = async (title: string, image: File) => {
    try {
      await addSubCategory(categoryId as string, title, image);
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
    try {
      console.log(id, title, image);
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
      <h1 className="text-3xl font-bold text-right"> الاقسام الفرعية</h1>
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
          handleNavigate={(id) => navigate(`/products/${id}`)}
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

export default SubCategoriesPage;
