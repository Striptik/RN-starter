import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { AppWithNavigationState } from '../navigation/'
import { connect } from 'react-redux'

// Styles

class RootContainer extends Component {

  render () {
    return (
      <View style={{flex: 1}}>
        {/* <StatusBar barStyle='light-content' /> */}
        <AppWithNavigationState />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(null, mapDispatchToProps)(RootContainer)
