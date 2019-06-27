import React from 'react'
import './App.css'
import { Header, Container } from 'semantic-ui-react'
import { Route } from "react-router-dom";

import FinalPage from './FinalPage'

function App() {
  return (
    <>
      <Container>
        <Header as='h1'>Two Trumps and a Lie</Header>
      </Container>
      <Route path='/final' exact component={FinalPage}/>
    </>
  )
}

export default App
