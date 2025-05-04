
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/sections/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import Collection from './pages/Collection.jsx'


function App() {
 

  return (
    <div className="App">
           <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/collection" element={<Collection/>}/>
      </Routes>
   
        </Router>
     
    </div>

  )
}

export default App
