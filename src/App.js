import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Container } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import Board from './components/Board'
import FinalPage from './components/FinalPage'
import { stat } from 'fs';

class App extends React.Component {
  state = {
    score: 0,
    quotes: [],
    lie: []
  }

  componentDidMount () {
    //connect with db and api
  }

  render () {
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
}


export default App
