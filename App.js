/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainApp from './src/Routes';
import Details from './src/Details';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={mainApp}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Details" 
            component={Details}
            options={{
              headerShown: true
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
