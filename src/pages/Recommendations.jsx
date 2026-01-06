import React, { useEffect, useState } from 'react'
import { fetchRecommendations } from '../api'
import MovieCard from '../components/MovieCard'

export default function Recommendations(){
  const [recs, setRecs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const userId = sessionStorage.getItem('user_id')

  useEffect(()=>{
    async function run(){
      try {
        const data = await fetchRecommendations(userId, 12)
        setRecs(data)
      } catch (e) {
        console.error(e)
        setError('추천을 불러오지 못했습니다.')
      } finally {
        setLoading(false)
      }
    }
    if (userId) run()
  }, [userId])

  if(!userId) return <p>먼저 사용자 선택 화면에서 유저를 선택해 주세요.</p>
  if(loading) return <p>불러오는 중...</p>
  if(error) return <p>{error}</p>

  return (
    <main>
      <h3>AI Recommendations for user #{userId}</h3>
      <div style={{display:'grid', gridTemplateColumns:'1fr', gap:12}}>
        {recs.map((r, idx) => (
          <MovieCard key={idx} movie={r.movie} score={r.score} />
        ))}
      </div>
    </main>
  )
}
