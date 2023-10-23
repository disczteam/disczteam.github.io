import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './home'
import CodeOfConduct from './code-of-conduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
