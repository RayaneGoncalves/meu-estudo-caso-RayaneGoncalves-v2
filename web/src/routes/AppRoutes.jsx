import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Detalhe from '../pages/Detalhe'

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <header className='header'>
        <nav className='container d-flex justify-content-between align-items-center'>
          <Link to='/' className='navbar-brand'>Meu Estudo de Caso</Link>
          <div><a href='https://github.com/RayaneGoncalves' target='_blank' rel='noreferrer'>@RayaneGoncalves</a></div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aluno/:id' element={<Detalhe/>} />
      </Routes>
    </BrowserRouter>
  )
}
