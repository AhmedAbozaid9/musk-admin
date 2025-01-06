import CategoryForm from "@/components/category/CategoryForm";

const CategoriesPage = () => {
  const handleAddCategory = async (title: string, image: File) => {
    console.log(title, image);
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
