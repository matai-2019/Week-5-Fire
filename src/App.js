import React from 'react'
import './App.css'
import { Header, Container } from 'semantic-ui-react'
import { Route } from "react-router-dom";

import FinalPage from './FinalPage'
import AppHeader from './components/AppHeader'
import Board from './components/Board'

function App() {
  return (
    <>
      <Container>
        <Header as='h1'>Two Trumps and a Lie</Header>
        <AppHeader />
        <Board />
      </Container>
      <Route path='/final' exact component={FinalPage}/>
    </>
  )
}

export default App
