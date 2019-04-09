import React, { Component } from 'react'
import {
  Container,
  Name,
  GameListHeader,
  GameList,
  GameRecord,
  Column,
  ColumnLabels,
} from '../styled/Profile'
import Relay from 'react-relay'

class Profile extends Component {
  get records() {
    return this.props.viewer.user.p1games.edges.map((edge, index) => {
      let { node: game } = edge
      return (
        <GameRecord key={index} index={index}>
          <Column>{game.winner ? 'Won!' : "Didn't Win!"}</Column>
          <Column>{game.p1Guess}</Column>
          <Column>{game.p1GuessCorrect === true ? 'Yes!' : 'Nope!'}</Column>
          <Column>{new Date(game.createdAt).toLocaleDatesString()}</Column>
        </GameRecord>
      )
    })
  }

  render() {
    let { email } = this.props.viewer.user

    return (
      <Container>
        <Name>{email}</Name>
        <GameList>
          <GameListHeader>My Games</GameListHeader>
          <ColumnLabels>
            <Column>Outcomme</Column>
            <Column>Guess</Column>
            <Column>Guessed Correctly</Column>
            <Column>Date</Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Relay.createContainer(Profile, {
  fragements: {
    viewer: () => Relay.QL`
        fragement on Viewer {
          user {
            id
            email
            p1games (first: 10) {
              edges {
                node {
                  id
                  createdAt
                  winner {
                    id
                  }
                  p1Guess
                  P1GuessCorrect
                }
              }
            }

          }
        }
      `,
  },
})
