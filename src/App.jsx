import Home from './pages/Home'
import DemandeInscription from './pages/DemandeInscription'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/demande-inscription' element={<DemandeInscription/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
