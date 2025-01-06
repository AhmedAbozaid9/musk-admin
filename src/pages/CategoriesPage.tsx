import { addCategory } from "@/api/categories/addCategory";
import { deleteCategory } from "@/api/categories/deleteCategory";
import { getCategories } from "@/api/categories/getCategories";
import CategoryForm from "@/components/category/CategoryForm";
import CategoryTable from "@/components/category/CategoryTable";
import Loading from "@/components/general/Loading";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CategoriesPage = () => {
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
  console.log(categories);
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
      <CategoryForm handleAddCategory={handleAddCategory} />
      {categories && categories.length > 0 ? (
        <CategoryTable
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
