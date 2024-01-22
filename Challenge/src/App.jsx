import { Route, Routes } from 'react-router-dom'

import { FormProject } from './pages/formProject'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formulario-Proyecto" element={<FormProject />} />
      </Routes>
    </>
  )
}

export default App
