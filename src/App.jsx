import './App.css'
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Contacto } from './pages/Contacto';
import { Navegacion } from './components/Navegacion';

function App() {
  return (
    <>
    <Navegacion/>
    <Routes>
      <Route path='/' element={<Home/>} index/>
      <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    </>
  )
}

export default App