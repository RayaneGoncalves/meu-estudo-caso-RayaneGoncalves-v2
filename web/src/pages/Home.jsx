import React, {useEffect, useState} from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'

export default function Home(){
  const [alunos, setAlunos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setLoading(true)
    api.get('/alunos')
      .then(res => setAlunos(res.data))
      .catch(err => setError('Falha ao carregar'))
      .finally(()=>setLoading(false))
  },[])

  if(loading) return <div className='container'><h2>Carregando...</h2></div>
  if(error) return <div className='container'><h2>{error}</h2></div>

  return (
    <div className='container'>
      <h1 style={{color:'var(--accent)'}}>Lista de Alunos</h1>
      <div className='row'>
        {alunos.map(a=>(
          <div className='col-md-4' key={a.id}>
            <div className='p-3 card-aluno m-2'>
              <h5>{a.nome}</h5>
              <p className='text-muted'>ID: {a.id}</p>
              <Link to={'/aluno/'+a.id} className='btn btn-accent'>Ver Detalhes</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
