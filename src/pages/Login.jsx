import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../api'

export default function Login(){
  const [users, setUsers] = useState([])
  const [selected, setSelected] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    fetchUsers().then(setUsers).catch(console.error)
  }, [])

  function submit(e){
    e.preventDefault()
    if(!selected) return
    sessionStorage.setItem('user_id', selected)
    navigate('/recommendations')
  }

  return (
    <main>
      <h3>Choose a demo user</h3>
      <form onSubmit={submit} style={{display:'flex', gap:12, alignItems:'center'}}>
        <select value={selected} onChange={e=>setSelected(e.target.value)}>
          <option value="">-- Select user --</option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name} (id:{u.id})</option>)}
        </select>
        <button type="submit">Go</button>
      </form>
    </main>
  )
}
