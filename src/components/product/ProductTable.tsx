import { ProductTypes } from "@/api/products/addProduct";
import React from "react";

interface ProductTableProps {
  handleEdit: (product: ProductTypes) => void;
  handleDelete: (id: string) => void;
  products: ProductTypes[];
}

const ProductTable = ({}: ProductTableProps) => {
  return <div>ProductTable</div>;
};

export default ProductTable;
