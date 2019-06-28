import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { getQuote } from '../api'

const TrumpCard = () => {
  return (
    <Card>
      {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>Trump says?</Card.Header>
        <Card.Description>
          "She’s Not My Type"
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default TrumpCard