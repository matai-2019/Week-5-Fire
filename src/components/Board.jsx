import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import TrumpCard from './TrumpCard';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card1: {
        message: 'card1',
        value: 'trump'
      },
      card2: {
        message: 'card2',
        value: 'lie'
      },
      card3: {
        message: 'card3',
        value: 'trump'
      },
      score: 0,
      quotes: props.quotes,
      lies: props.lies,
      result: null
    }
  }

  // Function that pops lies and 
  getLies = () => {
    let score = this.state.score

    const { quotes, lies } = this.state
    const cards = [quotes.pop(), quotes.pop(), lies.pop()]
    this.shuffle(cards)

    this.setState({
      quotes,
      lies,
      card1: cards[0],
      card2: cards[1],
      card3: cards[2],
      score: score
    })
  }

  checkLies = (val) => {
    console.log('val', val)

    if (val === 'lie'){
      this.setState({score: this.state.score++})

    }
    console.log('checklies')
    this.getLies()
  }


  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }


  componentDidMount() {
    this.getLies()
  }

  render() {
    return (
      <div className="Board">
        <p>Board</p>
        <Container>
          <Grid columns={3}>
            <GridColumn>
              <TrumpCard checkLies={this.checkLies} trumpCard={this.state.card1} />
            </GridColumn>
            <GridColumn>
              <TrumpCard checkLies={this.checkLies} trumpCard={this.state.card2} />
            </GridColumn>
            <GridColumn>
              <TrumpCard checkLies={this.checkLies} trumpCard={this.state.card3} />
            </GridColumn>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Board