import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detalhe from './src/screens/Detalhe';
import { globalStyles, colors } from './src/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: globalStyles.header,
          headerTitleStyle: globalStyles.headerTitle,
          headerTintColor: colors.primary,
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ title: 'Meu Estudo de Caso' }} 
        />
        <Stack.Screen 
          name='Detalhe' 
          component={Detalhe} 
          options={{ title: 'Detalhes do Aluno' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
