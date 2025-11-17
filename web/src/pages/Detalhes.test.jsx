import { render, screen } from '@testing-library/react'
import Detalhe from './Detalhe'
import { vi } from 'vitest'
import * as apiModule from '../services/api'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

vi.spyOn(apiModule, 'default').mockImplementation({
  get: () => Promise.resolve({ data: {id: 1, nome: 'Aluno Detalhe Teste'} })
})

test('render detalhes do aluno', async () => {
  render(
    <MemoryRouter initialEntries={['/aluno/1']}>
      <Routes>
        <Route path="/aluno/:id" element={<Detalhe />} />
      </Routes>
    </MemoryRouter>
  )

  const item = await screen.findByText('Aluno Detalhe Teste')
  expect(item).toBeTruthy()
})