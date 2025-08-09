import axios from "../lib/axios";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
    state: () => ({
        project: null as null | any,

    }),

    actions: {
        async fetchProject() {
            try {
                const response = await axios.get("/projects");
                this.project = response.data;
            } catch (error) {
                console.error("Failed to fetch projects:", error);
                throw error;
            } 
        }
    }
})