/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  View
} from 'react-native';

import HeaderComponant from './src/components/Header';
import AlbumListComponent from './src/components/AlbumList';

class TryReactNative extends Component {
  render() {
    return (
        <View>
            <HeaderComponant title={'Albums'} />
            <AlbumListComponent />
        </View>
    );
  }
}

// const styles = StyleSheet.create({
// });

AppRegistry.registerComponent('TryReactNative', () => TryReactNative);
