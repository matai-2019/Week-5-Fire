import React from 'react'
import { Card } from 'semantic-ui-react'


const TrumpCard = ({trumpCard}) => {
  return (
    <Card link >
      {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>Trump says?</Card.Header>
        <Card.Description>
          {trumpCard.message}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default TrumpCard