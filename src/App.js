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
    getLies().then(lies => {
      const ourLies = lies.map(lie => lie.lie)
      this.setState({ourLies, quotes})
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
          <TrumpGame />
        </Container>
        <Route path='/final' exact component={FinalPage} />
      </>
    )
  }
}


export default App
