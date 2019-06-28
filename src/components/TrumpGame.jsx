import React, { Component } from 'react'
import Board from './Board'

export class TrumpGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      quotes: [{
        message: 'card1',
        value: 'trump'
      }, {
        message: 'card2',
        value: 'trump'
      }, {
        message: 'card3',
        value: 'trump'
      }],
      lies: [{
        message: 'lie1',
        value: 'lie'
      }, {
        message: 'li1e',
        value: 'lie'
      }, {
        message: 'lie3',
        value: 'lie'
      }],
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
