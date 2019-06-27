import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react';
import TrumpCard from './TrumpCard';

class Board extends React.Component {
  render() {
    return (
      <div className = "Board">
        <p>Board</p>
        <Container>
          <Grid columns = {3}>
            <GridColumn>
              <TrumpCard />
            </GridColumn>
            <GridColumn>
              <TrumpCard />
            </GridColumn>
            <GridColumn>
              <TrumpCard />
            </GridColumn>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Board