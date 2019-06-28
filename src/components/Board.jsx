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
      quotes: props.quotes,
      lies: props.lies,
      result: null
    }
  }

  // Function that pops lies and 
  getLies = () => {
    const { quotes, lies } = this.state
    const cards = [quotes.pop(), lies.pop(), lies.pop()]
    this.shuffle(cards)

    this.setState({
      quotes,
      lies,
      card1: cards[0],
      card2: cards[1],
      card3: cards[2]
    })
  }

  clickHandler(e){
    
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }


  componentDidMount() {
    this.getLies()
    console.log('BORAD', this.state)
  }

  render() {
    return (
      <div className="Board">
        <p>Board</p>
        <Container>
          <Grid columns={3}>
            <GridColumn>
              <TrumpCard trumpCard={this.state.card1} />
            </GridColumn>
            <GridColumn>
              <TrumpCard trumpCard={this.state.card2} />
            </GridColumn>
            <GridColumn>
              <TrumpCard trumpCard={this.state.card3} />
            </GridColumn>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Board