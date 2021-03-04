/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import allReducer from './src/reducers'
import MainNavigation from "./src/navigations/mainNavigation";

const globalStore = createStore(
  allReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
) 

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
