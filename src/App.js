import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Container } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import FinalPage from './components/FinalPage'
import { stat } from 'fs';
import TrumpGame from './components/TrumpGame';

class App extends React.Component {
  componentDidMount () {
    //connect with db and api pass down to TrumpGame
  }

  render () {
    return (
      <>
        <Container>
          <AppHeader />
          <TrumpGame />
        </Container>
        <Route path='/final' exact component={FinalPage} />
      </>
    )
  }
}


export default App
