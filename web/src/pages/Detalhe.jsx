import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

export default function Detalhe(){
  const { id } = useParams()
  const [aluno, setAluno] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    api.get('/alunos/'+id).then(r=>setAluno(r.data)).finally(()=>setLoading(false))
  },[id])

  if(loading) return <div className='container'><h2>Carregando...</h2></div>
  if(!aluno) return <div className='container'><h2>Aluno não encontrado</h2></div>

  return (
    <div className='container'>
      <h1 style={{color:'var(--accent)'}}>Detalhes</h1>
      <div className='card-aluno p-4'>
        <h2>{aluno.nome}</h2>
        <p><strong>ID:</strong> {aluno.id}</p>
        <Link to='/' className='btn btn-outline-secondary mt-2'>Voltar</Link>
      </div>
    </div>
  )
}