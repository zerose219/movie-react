import React from 'react'

export default function MovieCard({ movie, score }){
  return (
    <div style={{border:'1px solid #ddd', borderRadius:12, padding:12, display:'flex', gap:12}}>
      <img src={movie.poster_url} alt={movie.title} style={{width:92, height:138, objectFit:'cover', borderRadius:8}} onError={(e)=>{e.currentTarget.style.display='none'}}/>
      <div>
        <h3 style={{margin:'4px 0'}}>{movie.title}</h3>
        <div style={{fontSize:14, opacity:0.8}}>{movie.genres} {movie.year ? `• ${movie.year}` : ''}</div>
        {typeof score === 'number' && <div style={{marginTop:6, fontSize:13}}>AI score: {score.toFixed(3)}</div>}
        {movie.overview && <p style={{fontSize:14, marginTop:8, lineHeight:1.35}}>{movie.overview}</p>}
      </div>
    </div>
  )
}
