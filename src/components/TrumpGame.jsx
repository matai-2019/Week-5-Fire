import React, { Component } from 'react'
import Board from './Board'

export class TrumpGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      quotes: props.quotes,
      lies: props.lies,
    }
  }


  render() {
    const { quotes, lies } = this.state
    return (
      <Board quotes={quotes} lies={lies} />
    )
  }
}

export default TrumpGame
