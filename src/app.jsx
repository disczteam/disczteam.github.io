import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { HomePage, CodeOfConductPage, SpaceSharePage } from './pages'
import apolloClient from './discz-apollo-client'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="/space/:id" element={<SpaceSharePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
