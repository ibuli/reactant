import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavDrawer from '../components/NavDrawer'
import { Header, Main } from '../styled/Template'
import Relay from 'react-relay'

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer
            auth={this.props.route.auth}
            authenticated={this.props.viewer.user}
          />
          <Header>Reactant</Header>
          <Main>{this.props.children}</Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Relay.createContainer(Template, {
  fragements: {
    viewer: () => Relay.QL`
        fragement on Viewer {
          user {
            id
          }
        }
      `,
  },
})
