import { render, screen } from '@testing-library/react'
import Home from './Home'
import { vi } from 'vitest'
import * as apiModule from '../services/api'

vi.spyOn(apiModule, 'default').mockImplementation({
  get: () => Promise.resolve({ data: [{id:1, nome:'Teste'}] })
})

test('render lista de alunos', async () => {
  render(<Home />)
  const item = await screen.findByText('Teste')
  expect(item).toBeTruthy()
})
