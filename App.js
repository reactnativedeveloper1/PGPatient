/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './app/navigator/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './app/store';
import runRootSaga from './app/sagas';


const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#319fb1', // primary color for your app, usually your brand color.
    secondary: '#414757', // secondary color for your app which complements the primary color.
    accent : '#414757', // secondary color for your app which complements the primary color.
    background: '#319fb1', // background color for pages, such as lists.
    surface : '#fff', // background color for elements containing content, such as cards.
    text : '#414757', // text color for content.
    disabled : '#e4e1dd', // color for disabled elements.
    placeholder : '#5e5a54',  // color for placeholder text, such as input placeholder.
    backdrop: 'rgba(0,0,0,0.7)', // color for backdrops of various components such as modals.
    error: '#f13a59', // color for validation error of form input.
  },
};

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed','Warning:'];

export default class App extends Component {
  constructor(properties) {
    runRootSaga();
    super(properties);
  }

  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.primary} barStyle='dark-content'/>
          <AppNavigator />
        </PaperProvider>
        </Provider>          
    );
  }
}



