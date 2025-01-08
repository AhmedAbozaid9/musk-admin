import React, { useState } from "react";
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
  console.log(id);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm<CategoryFormValues>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(
    image || null
  );
  const onSubmit = async (data: CategoryFormValues) => {
    if (handleAddCategory) {
      await handleAddCategory(data.title, data.image);
    }
    if (handleEditCategory) {
      console.log(data);
      await handleEditCategory(id as string, data.title, data.image);
    }
    reset(); // Reset form fields
    setSelectedImage(null); // Reset the selected image
    setIsOpen(false); // Close the dialog
  };

  console.log(title);

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
              register={register}
              setValue={setValue}
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
