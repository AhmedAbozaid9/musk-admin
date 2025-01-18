import { X } from "lucide-react";
import React from "react";

interface ImageInputProps {
  selectedImages: File[];
  setSelectedImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const MultiImageInput = ({
  selectedImages,
  setSelectedImages,
}: ImageInputProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-2">
      <input
        key={
          selectedImages[0] ? "imageInputWithImage" : "imageInputWithoutImage"
        }
        type="file"
        accept="image/*"
        id="multiImageInput"
        className="hidden"
        onChange={handleImageChange}
        multiple
      />
      <label
        htmlFor="multiImageInput"
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
        <span className="text-sm font-medium">اختر صور</span>
      </label>

      {selectedImages.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  className="w-full h-full object-cover rounded-lg border-2 border-black"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiImageInput;
