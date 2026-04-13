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
    }),
    { name: "image-store" }
  )
);