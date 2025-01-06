import { addCategory } from "@/api/categories/addCategory";
import CategoryForm from "@/components/category/CategoryForm";
import toast from "react-hot-toast";

const CategoriesPage = () => {
  const handleAddCategory = async (title: string, image: File) => {
    try {
      await addCategory(title, image);
      toast.success("تم اضافة القسم");
    } catch (error) {
      toast.error("حدث خطاء ما");
    }
  };

  return (
    <div className="w-full text-right">
      {" "}
      <h1 className="text-3xl font-bold text-right">الاقسام</h1>
      <CategoryForm handleAddCategory={handleAddCategory} />
      {/* 
      {categories && categories.length > 0 ? (
        <CategoriesTable handleDelete={handleDeleteCategory} categories={categories} />
      ) : (
        <p>لا توجد فئات</p>
      )} */}
    </div>
  );
};

export default CategoriesPage;
