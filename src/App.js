import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Container } from 'semantic-ui-react'
import AppHeader from './components/AppHeader'
import FinalPage from './components/FinalPage'
import { stat } from 'fs';
import TrumpGame from './components/TrumpGame';
import { getQuotes, getLies } from './api'

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {}
}

getLiesAndStuffTrumpSays = () => {
  Promise.all([
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes(),
    getQuotes()
  ]).then(quotes => {
    getLies()
    .then(lies => {
      this.setState({ourLies: lies, quotes})
    })
})
}

  componentDidMount () {
    this.getLiesAndStuffTrumpSays()
  }

  render () {
    return (
      <>
        <Container>
          <AppHeader />
          {this.state.quotes && this.state.ourLies && <TrumpGame lies={this.state.ourLies} quotes={this.state.quotes}/>}
        </Container>
        <Route path='/final' exact component={FinalPage} />
      </>
    )
  }
}


export default App
