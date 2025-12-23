import { defineStore } from 'pinia'
import api from '../lib/axios'

interface Education {
  id: number
  school_name: string
  degree: string
  major: string
  start_date: string
  end_date: string | null
  is_present: boolean
}

export const useEducationStore = defineStore('education', {
  state: () => ({
    educations: [] as Education[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchEducation() {
      this.loading = true
      try {
        const response = await api.get('/education')
        this.educations = response.data
      } catch (er: any) {
        this.error = er.message
      } finally {
        this.loading = false
      }
    },

    async createEducation(formData: any) {
      this.loading = true
      this.error = null
      try {
        const response = await api.post('/education', formData)
        this.educations.unshift(response.data)
      } catch (er: any) {
        this.error = er.message
      } finally {
        this.loading = false
      }
    },
  },
})
