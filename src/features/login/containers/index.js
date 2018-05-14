import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

// import LoginPage from '../components';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text> Login ! Let's create a Dumb Component !</Text>
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

const LoginContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Login);
export default LoginContainer;
