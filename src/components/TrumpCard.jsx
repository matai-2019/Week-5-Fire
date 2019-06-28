import React from 'react'

import { Card } from 'semantic-ui-react'
import { getQuote } from '../api'


const TrumpCard = ({trumpCard}) => {
  return (
    <Card link >
      {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>Trump says?</Card.Header>
        <Card.Description>
          {trumpCard.message}
        </Card.Description>
        <Card.Meta hidden="true">
          {trumpCard.value}
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default TrumpCard