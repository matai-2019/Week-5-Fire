import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import TrumpCard from './TrumpCard';

class Board extends React.Component {
  state = {
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
    result: null
  }

  render() {
    return (
      <div className = "Board">
        <p>Board</p>
        <Container>
          <Grid columns = {3}>
            <GridColumn>
              <TrumpCard trumpCard = {this.state.card1}/>
            </GridColumn>
            <GridColumn>
              <TrumpCard trumpCard = {this.state.card2}/>
            </GridColumn>
            <GridColumn>
              <TrumpCard trumpCard = {this.state.card3}/>
            </GridColumn>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Board