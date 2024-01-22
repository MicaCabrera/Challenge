import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { ProjectsProvider } from './context/projectsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
