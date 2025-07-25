import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: null as null | any,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post("/login", { email, password });
        this.token = response.data.token;
        localStorage.setItem("token", this.token);
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
  },
});
