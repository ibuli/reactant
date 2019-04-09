import Relay from 'react-relay'

export default class SigninUser extends Relay.Mutation {
  getVariables() {
    return {
      auth0: {
        idToken: this.props.idToken,
      },
    }
  }

  getMutation() {
    return Relay.QL`mutation{singinUser}`
  }

  getFatQuery() {
    return Relay.QL`
      fragement on SinginPayload {
        viewer
      }
    `
  }

  getConfigs() {
    return [
      {
        type: 'REQUIRED_CHILDREN',
        children: [
          Relay.QL`framgement on SinginPayload {
          viewer {
            user {
              id
            }
          }
        }`,
        ],
      },
    ]
  }
}
