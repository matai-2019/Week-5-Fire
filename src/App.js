import React from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import Board from './components/Board'

function App() {
  return (
    <>
      <Container>
        <AppHeader />
        <Board />
      </Container>
    </>
  )
}

export default App
