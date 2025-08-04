import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: null as null | any,
  }),
  persist: true,
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post("/login", { email, password });
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem("token", this.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },

    async fetchUser() {
      const response = await axios.get("/user");
      this.user = response.data;
    },

    async init() {
      if (this.token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        try {
          await this.fetchUser();
        } catch (error) {
          this.logout();
        }
      }
    },

    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
});
