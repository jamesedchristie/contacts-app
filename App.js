import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AllContactsView from './screens/AllContactsScreen';
import ContactView from './screens/ContactScreen';
import DeleteContactView from './screens/DeleteContactScreen';
import EditContactView from './screens/EditContactScreen';
import Home from './screens/HomeScreen';
import NewContactView from './screens/NewContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AllContacts" component={AllContactsView}/>
        <Stack.Screen name="Contact" component={ContactView}/>
        <Stack.Screen name="NewContact" component={NewContactView}/>
        <Stack.Screen name="EditContact" component={EditContactView}/>
        <Stack.Screen name="DeleteContact" component={DeleteContactView}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

