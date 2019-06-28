import React from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import Board from './components/Board'
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
      </>
    )
  }
}


export default App
