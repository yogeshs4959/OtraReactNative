/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginView from './LoginView.js';
import MainTabBar from './MainTabBar.js';
import DefaultPreference from 'react-native-default-preference';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    state = {
      loginValue  : false,
    }
  }


  render() {
  DefaultPreference.get('loginStatus').then(function(value) {this.setState(loginValue => {value})});
    return (
    //  Alert.alert("Alert", "Button pressed ");
       // if this.state.loginValue == false {
       //   <MainTabBar />
       // } else {
       //   <LoginView />
       // }

      <LoginView />


    //  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
