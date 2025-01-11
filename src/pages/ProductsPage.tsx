import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id: subCategoryId } = useParams();

  return (
    <div className="w-full text-right">
      <h1 className="text-3xl font-bold text-right"> المنتجات</h1>
      <Button onClick={() => setIsOpen(true)} className="px-8 mt-8 mb-4">
        <Plus /> اضف منتج
      </Button>
      {/* <CategoryForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAddCategory={handleAddCategory}
      />
      {categories && categories.length > 0 ? (
        <CategoryTable
          handleNavigate={(id) => navigate(`${id}`)}
          handleEdit={handleEditCategory}
          handleDelete={handleDeleteCategory}
          categories={categories}
        />
      ) : (
        <p>لا توجد اقسام</p>
      )} */}
    </div>
  );
};

export default ProductsPage;
