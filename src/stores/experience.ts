import { defineStore } from 'pinia'
import api from '../lib/axios'

interface Experience {
  id: number
  role: string
  company: string
  start_date: string
  end_date: string | null
  description: string
}
export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [] as Experience[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchExperience() {
      this.loading = true
      try {
        const response = await api.get('/experiences')
        this.experiences = response.data
        console.log('Fetched experiences:', response.data)
      } catch (er: any) {
        this.error = er.message
      } finally {
        this.loading = false
      }
    },
  },
})
