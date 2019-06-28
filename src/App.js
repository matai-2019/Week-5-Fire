import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Container, Segment, Image, Divider } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import FinalPage from './components/FinalPage'
import TrumpGame from './components/TrumpGame';

class App extends React.Component {
  componentDidMount() {
    //connect with db and api pass down to TrumpGame
  }

  render() {
    return (
      <>
        <div id='background'>
        <Container>
          <AppHeader />
          <TrumpGame />
        </Container>
      </div>
      <Route path='/final' exact component={FinalPage} />
      </>
    )
  }
}


export default App
