
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/sections/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import Collection from './pages/Collection.jsx'
import Talleres from './pages/Talleres.jsx'
import Visitas from './pages/Visitas.jsx'
import Contacto from './pages/Contacto.jsx'
import { Obras } from './pages/Obras.jsx'

function App() {
 

  return (
    <div className="App" style={{height: "inherit"}}>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path='/talleres' element={<Talleres/>}/>
        <Route path='/visitas' element={<Visitas/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/Obras' element={<Obras/>}/>
      </Routes>
    </Router>
      
    </div>
      
  )
}

export default App
