import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavDrawer from '../components/NavDrawer'
import { Header, Main } from '../styled/Template'
class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavDrawer />
        <Header>Reactant</Header>
        <Main>{this.props.children}</Main>
      </MuiThemeProvider>
    )
  }
}

export default Template
