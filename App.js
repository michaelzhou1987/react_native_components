/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TestView from './src/screens/TestView';

const navigator = createStackNavigator(
  {
    TestView: TestView,
  },
  {
    initialRouteName: 'TestView',
    defaultNavigationOptions: {
      title: 'Test View',
    },
  },
);

export default createAppContainer(navigator);