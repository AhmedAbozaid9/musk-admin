import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useForm } from "react-hook-form";
import ImageInput from "../general/ImageInput";

interface CategoryFormProps {
  handleAddCategory: (title: string, image: File) => Promise<void>;
}

interface CategoryFormValues {
  title: string;
  image: File;
}

const CategoryForm = ({ handleAddCategory }: CategoryFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm<CategoryFormValues>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit = async (data: CategoryFormValues) => {
    await handleAddCategory(data.title, data.image);
    reset(); // Reset form fields
    setSelectedImage(null); // Reset the selected image
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="px-8 mt-8 mb-4">
          <Plus /> اضف قسم
        </Button>
      </DialogTrigger>
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
