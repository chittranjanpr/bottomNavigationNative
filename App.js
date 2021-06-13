import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import HomeScreen from './src/screens/HomePage';
import DetailListScreen from './src/screens/DetailListScreen';
import updateList from './src/store/reducer'

const Stack = createStackNavigator();
const store = createStore(updateList);


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false}} /> 
          <Stack.Screen name="detailListScreen" component={DetailListScreen} options={{ title: 'Detail page'}}  /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;