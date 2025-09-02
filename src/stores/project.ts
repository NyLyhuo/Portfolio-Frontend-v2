import { useToast } from 'vue-toast-notification'
import api from '../lib/axios'
import { defineStore } from 'pinia'

interface Project {
  id: number
  title: string
  description: string
  tech_stack: string[]
  github_link: string
  live_link: string
  image?: string
}
export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [] as Project[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProject() {
      this.loading = true
      try {
        const response = await api.get('/projects')
        this.projects = response.data
      } catch (er: any) {
        this.error = er.message
      } finally {
        this.loading = false
      }
    },

    async createProject(formData: any) {
      this.loading = true
      this.error = null
      try {
        const data = new FormData()
        data.append('title', formData.title)
        data.append('description', formData.description)
        data.append('github_link', formData.github_link)
        data.append('live_link', formData.live_link)
        if (formData.image) {
          data.append('image', formData.image)
        }
        if (Array.isArray(formData.tech_stack)) {
          formData.tech_stack.forEach((tech: string, index: number) => {
            data.append(`tech_stack[${index}]`, tech)
          })
        }
        const response = await api.post('/projects', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        this.projects.unshift(response.data)
        return response.data
      } catch (er: any) {
        this.error = er.message
        throw er
      } finally {
        this.loading = false
      }
    },

    async updateProject(
      id: number,
      projectData: FormData | Record<string, any>
    ) {
      this.loading = true
      this.error = null
      try {
        const response = await api.put(
          `/projects/${id}?_method=PUT`,
          projectData
        )
        const update = response.data

        const index = this.projects.findIndex((p) => p.id === id)
        if (index !== -1) {
          this.projects[index] = update
        }

        useToast().success('Project updated successfully!')
      } catch (er: any) {
        useToast().error('Failed to update project: ')
      } finally {
        this.loading = false
      }
    },

    async deleteProject(id: number) {
      this.loading = true
      this.error = null
      try {
        await api.delete(`/projects/${id}`)
        this.projects = this.projects.filter((p) => p.id !== id)
        useToast().success('Project deleted successfully!')
      } catch (er: any) {
        useToast().error('Failed to delete project: ' + er.message)
      } finally {
        this.loading = false
      }
    },
  },
})
