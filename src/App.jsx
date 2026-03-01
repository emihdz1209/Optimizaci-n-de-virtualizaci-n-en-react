import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Contador from './components/counter/Contador'
import ListaDinamica from './components/lista/ListaDinamica'

function App() {
  return (
    <BrowserRouter>
      <h1>Actividad 1 - Optimización de Renderizado en React</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Contador />} />
        <Route path="/pokedex" element={<ListaDinamica />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App