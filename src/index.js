import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement from './pages/Fiche-logement'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
     <React.StrictMode>
          <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<APropos />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<FicheLogement />} />
               </Routes>
          </Router>
     </React.StrictMode>
)
