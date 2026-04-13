import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useImageStore = create(
  persist(
    (set) => ({
      images: [],
      setImages: (payload) =>
        set((state) => ({
          images: [...state.images, payload],
        })),
        
      deleteImage: (id) =>
        set((state) => ({
          images: state.images.filter((img) => img.id !== id),
        })),
    }),

    { name: "image-store" }
  )
);