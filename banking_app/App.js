import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TouchScreen from './src/screens/TouchScreen';

const AppStack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='TouchScreen' component={TouchScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
