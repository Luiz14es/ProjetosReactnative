import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import ResultScreen from './src/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerStyle: { backgroundColor: '#363636' },
            headerTintColor: '#fff'}} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerStyle: { backgroundColor: '#363636' },
            headerTintColor: '#fff'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}