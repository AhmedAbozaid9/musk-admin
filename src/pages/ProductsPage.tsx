import { addProduct, ProductTypes } from "@/api/products/addProduct";
import { getProducts } from "@/api/products/getProducts";
import ProductForm from "@/components/product/ProductForm";
import ProductTable from "@/components/product/ProductTable";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id: subCategoryId } = useParams();

  const { data: products, refetch } = useQuery({
    queryKey: ["products", subCategoryId],
    queryFn: () => getProducts(subCategoryId as string),
  });

  const handleAddProduct = async (
    product: ProductTypes,

    imageCover: File,
    images: File[],
  ) => {
    try {
      if (typeof product.colors === "string") {
        await addProduct(
          {
            ...product,
            imageCover,
            images,
            colors: product.colors.split(","),
          },
          subCategoryId as string,
        );
      }
      await refetch();
    } catch (err) {
      console.log(err);
      toast.error("حدث خطأ ما");
    }
  };
  const handleEdit = async (product: ProductTypes) => {
    console.log(product);
  };
  const handleDelete = async (id: string) => {
    console.log(id);
  };

  return (
    <div className="w-full text-right">
      <h1 className="text-3xl font-bold text-right"> المنتجات</h1>
      <Button onClick={() => setIsOpen(true)} className="px-8 mt-8 mb-4">
        <Plus /> اضف منتج
      </Button>
      <ProductForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAddProduct={handleAddProduct}
      />
      {products && products.length > 0 ? (
        <ProductTable
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          products={products}
        />
      ) : (
        <p>لا توجد منتجات</p>
      )}
    </div>
  );
};

export default ProductsPage;
