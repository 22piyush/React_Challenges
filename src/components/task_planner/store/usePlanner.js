import { create } from "zustand";

export const usePlanner = create(() => ({
    task: [],
    addTask: (payload) => console.log(payload);

}));