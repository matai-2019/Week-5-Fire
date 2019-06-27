import React from 'react'
import './App.css'
import { Header, Container } from 'semantic-ui-react'
import { Route } from "react-router-dom";

import FinalPage from './components/FinalPage'
import AppHeader from './components/AppHeader'
import Board from './components/Board'

function App() {
  return (
    <>
      <Container>
        <AppHeader />
        <Board />
      </Container>
      <Route path='/final' exact component={FinalPage}/>
    </>
  )
}

export default App
