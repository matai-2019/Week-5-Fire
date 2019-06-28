import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Container } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import Board from './components/Board'

import FinalPage from './components/FinalPage'

function App() {
  return (
    <>
      <Container>
        <AppHeader />
        <Board />
      </Container>
      <Route path='/final' exact component={FinalPage} />
    </>
  )
}

export default App
