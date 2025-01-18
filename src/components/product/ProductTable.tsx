import { ProductTypes } from "@/api/products/addProduct";

interface ProductTableProps {
  handleEdit: (product: ProductTypes) => void;
  handleDelete: (id: string) => void;
  products: ProductTypes[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  console.log(products);
  return <div>ProductTable</div>;
};

export default ProductTable;
