import { X } from "lucide-react";
import React from "react";
import { UseFormSetValue } from "react-hook-form";

interface ImageInputProps {
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
  register: any;
  setValue: UseFormSetValue<any>;
}

const ImageInput = ({
  selectedImage,
  setSelectedImage,
  register,
  setValue,
}: ImageInputProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setValue("image", file); // Update the form value
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setValue("image", null as unknown as File); // Clear the form value
  };

  return (
    <div className="mt-2">
      <input
        {...register("image")}
        type="file"
        accept="image/*"
        id="imageInput"
        className="hidden"
        onChange={handleImageChange}
        required
      />
      {selectedImage ? (
        <div className="relative w-full flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-40 object-cover rounded-lg border-2 border-black"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>
      ) : (
        <label
          htmlFor="imageInput"
          className="cursor-pointer w-full flex flex-col items-center justify-center gap-2 px-4 py-6 border-2 border-dotted border-black text-black rounded-lg transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
          <span className="text-sm font-medium">اختر صورة</span>
        </label>
      )}
    </div>
  );
};

export default ImageInput;
