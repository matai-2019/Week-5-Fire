import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const TrumpCard = ({trumpCard}) => {
  return (
    <Card>
      {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>Trump says?</Card.Header>
        <Card.Description>
          {trumpCard.message}
        </Card.Description>
        <Card.Meta>
          {trumpCard.value}
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default TrumpCard