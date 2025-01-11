import { ProductTypes } from "@/api/products/addProduct";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import ImageInput from "../general/ImageInput";
import MultiImageInput from "../general/MultiImageInput";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

interface ProductFormProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddProduct?: (product: ProductTypes) => Promise<void>;
  handleEditProduct?: (product: ProductTypes) => Promise<void>;
}

const ProductForm = ({
  isOpen,
  setIsOpen,
  handleAddProduct,
  handleEditProduct,
}: ProductFormProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<ProductTypes>();

  const onSubmit = (data: ProductTypes) => {
    if (handleAddProduct) {
      handleAddProduct(data);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>إضافة منتج</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="product-form"
          dir="rtl"
          className="flex flex-wrap gap-4 py-4"
        >
          {/* Title */}
          <div className="w-full">
            <Label>عنوان المنتج</Label>
            <Input
              {...register("title")}
              placeholder="أدخل عنوان المنتج"
              className="w-full mt-2"
              required
            />
          </div>

          {/* Description */}
          <div className="w-full">
            <Label>وصف المنتج</Label>
            <Textarea
              {...register("description")}
              placeholder="أدخل وصف المنتج"
              className="w-full mt-2"
              required
            />
          </div>

          {/* Price */}
          <div className="w-full">
            <Label>السعر</Label>
            <Input
              type="number"
              {...register("price")}
              placeholder="أدخل السعر"
              className="w-full mt-2"
              required
            />
          </div>

          {/* Price After Discount */}
          <div className="w-full">
            <Label>السعر بعد الخصم</Label>
            <Input
              type="number"
              {...register("priceAfterDiscount")}
              placeholder="أدخل السعر بعد الخصم"
              className="w-full mt-2"
              required
            />
          </div>

          {/* Quantity */}
          <div className="w-full">
            <Label>الكمية</Label>
            <Input
              type="number"
              {...register("quantity")}
              placeholder="أدخل الكمية"
              className="w-full mt-2"
              required
            />
          </div>

          {/* Category */}
          <div className="w-full">
            <Label>القسم</Label>
            <Select dir="rtl">
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="القسم " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* SubCategory */}
          <div className="w-full">
            <Label>القسم الفرعي</Label>
            <Select dir="rtl">
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="القسم الفرعي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Colors */}
          <div className="w-full">
            <Label>الألوان</Label>
            <Input
              {...register("colors")}
              placeholder="أدخل الألوان (مفصولة بفواصل)"
              className="w-full mt-2"
              required
            />
          </div>

          {/* Image Cover */}
          <div className="w-full">
            <Label>صورة الغلاف</Label>
            <ImageInput
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>

          {/* Installation Service Price */}
          <div className="w-full">
            <Label>سعر خدمة التركيب</Label>
            <Input
              type="number"
              {...register("installationService.price")}
              placeholder="أدخل سعر خدمة التركيب"
              className="w-full mt-2"
            />
          </div>

          {/* Image Gallery */}
          <div className="w-full">
            <Label>صور إضافية</Label>
            <MultiImageInput
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          </div>

          <DialogFooter>
            <Button
              disabled={isSubmitting || !selectedImage}
              form="product-form"
              type="submit"
            >
              حفظ
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
