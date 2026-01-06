import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api'
})

export async function fetchUsers(){
  const { data } = await api.get('/users')
  return data
}

export async function fetchRecommendations(userId, limit=12){
  const { data } = await api.get('/recommend', { params: { user_id: userId, limit } })
  return data
}

export async function fetchMovies(){
  const { data } = await api.get('/movies?limit=100')
  return data
}

export default api