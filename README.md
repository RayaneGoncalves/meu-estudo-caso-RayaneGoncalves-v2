# Meu Estudo de Caso - Projeto Completo

## Visão geral
Projeto com 3 partes:
- **web/** → React + Vite (interface principal, rotas, Axios, Bootstrap, tema rosa pastel)
- **mobile/** → Expo + React Native (navegação, consumo da mesma API)
- **api/** → JSON Server (mock de backend)

---

## Como rodar localmente

### 1) API (JSON Server)
Abra um terminal e execute:
```bash
cd api
npm install
npm start
```
A API vai rodar em `http://localhost:3001`.

### 2) Web (React + Vite)
Em outro terminal:
```bash
cd web
npm install
npm run dev
```
Acesse `http://localhost:5173` no navegador.

### 3) Mobile (Expo)
Em outro terminal:
```bash
cd mobile
npm install
npx expo start
```
Use Expo Go ou emulador para testar.

---

## Rotas (Web)
- `/` → Home (lista de alunos)
- `/aluno/:id` → Detalhe do aluno

## Endpoints (API)
- `GET /alunos` → lista
- `GET /alunos/:id` → detalhe

---

## Testes (Web)
Rodar testes com:
```bash
cd web
npm run test
```

---

## Créditos
Desenvolvido por Rayane Gonçalves.



> Versão adaptada a partir do repositório de referência, sem imagens e com tema rosa.
