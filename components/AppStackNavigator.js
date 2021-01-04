import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/DonateBook';
import RecieverDetail  from '../screens/RecieverDetailScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetail : {
    screen : RecieverDetail,
    navigationOptions:{
      headerShown : false
    }
  },
},
  {
    initialRouteName: 'BookDonateList'
  }
);