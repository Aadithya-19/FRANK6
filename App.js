import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LogIn from './screens/LogIn';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  LogIn:{screen: LogIn},
  drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);