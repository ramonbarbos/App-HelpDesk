import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/pages/Home';
import New from './src/pages/New';
import Excluir from './src/pages/Excluir';
import Editar from './src/pages/Editar';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer screenOptions={{
      headerShown: false
    }}>
      <Stack.Navigator >
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="New" component={New} options={{headerShown: false}}/>
    <Stack.Screen name="Excluir" component={Excluir} options={{headerShown: false}}/>
    <Stack.Screen name="Editar" component={Editar} options={{headerShown: false}}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}


