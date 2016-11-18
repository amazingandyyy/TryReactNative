/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TryReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Amazingandyyy's first React Native App!
        </Text>
        <Text style={styles.instructions}>
          Hello World.
        </Text>
        <Text style={styles.instructions}>
          I still love TypeScript and Angular... :)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333',
    fontWeight: '900'
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TryReactNative', () => TryReactNative);
