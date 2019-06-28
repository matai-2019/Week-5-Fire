import React, { Component } from 'react'
import Board from './Board'

export class TrumpGame extends Component {
  state = {
    score: 0,
    quotes: [],
    lie: []
  }
  render() {
    return (
      <Board />
    )
  }
}

export default TrumpGame
