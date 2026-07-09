import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  withCredentials: true,
})

export const api = {
  get: <T>(url: string) => apiClient.get<T>(url),
  post: <T, D = unknown>(url: string, data: D) => apiClient.post<T>(url, data),
  put: <T, D = unknown>(url: string, data: D) => apiClient.put<T>(url, data),
  del: <T>(url: string) => apiClient.delete<T>(url),
}
