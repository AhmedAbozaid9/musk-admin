import React, { useEffect, useState } from "react";
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

import { useForm } from "react-hook-form";
import ImageInput from "../general/ImageInput";

interface CategoryFormProps {
  id?: string;
  title?: string;
  image?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddCategory?: (title: string, image: File) => Promise<void>;
  handleEditCategory?: (
    id: string,
    title: string,
    image: File
  ) => Promise<void>;
}

interface CategoryFormValues {
  title: string;
  image: File;
}

const CategoryForm = ({
  id,
  title,
  image,
  isOpen,
  setIsOpen,
  handleAddCategory,
  handleEditCategory,
}: CategoryFormProps) => {
  console.log("id", id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CategoryFormValues>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  console.log(selectedImage);
  const onSubmit = async (data: CategoryFormValues) => {
    if (handleAddCategory) {
      await handleAddCategory(data.title, selectedImage as File);
    }
    if (handleEditCategory) {
      await handleEditCategory(id as string, data.title, selectedImage as File);
    }
    reset();
    setSelectedImage(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (image && typeof image === "string") {
      fetch(image)
        .then((res) => res.blob())
        .then((blob) =>
          setSelectedImage(
            new File([blob], "existing-image.jpg", { type: blob.type })
          )
        );
    }
  }, [image]);
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>اضف قسم</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="category-form"
          dir="rtl"
          className="flex flex-wrap gap-4 py-4"
        >
          <div className="w-full">
            <Label>عنوان القسم</Label>
            <Input
              defaultValue={title}
              {...register("title")}
              placeholder="أدخل العنوان"
              className="w-full mt-2"
              required
            />
          </div>
          <div className="w-full">
            <Label>صورة القسم</Label>
            <ImageInput
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            disabled={isSubmitting || !selectedImage}
            form="category-form"
            type="submit"
          >
            حفظ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryForm;
