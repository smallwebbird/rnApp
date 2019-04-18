import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, } from 'react-navigation';
import DiaryTab from './src/diary/index.js';
import MessageTab from './src/message/index.js';
import MineTab from './src/mine/index.js';
import CommunityTab from './src/community/index.js';

const TabNavigator = createBottomTabNavigator({
  DiaryTab: { 
    screen: DiaryTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '日记'
    } )
  },
  CommunityTab: { 
    screen: CommunityTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '社区'
    } ) 
  },
  MessageTab: { 
    screen: MessageTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '消息'
    } ) 
  },
  MineTab: { 
    screen: MineTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '我的'
    } ) 
  }
});

const Nav = createStackNavigator(
  {
  Tab:{
    screen: TabNavigator,
  }
},
{
  navigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
  },
}
)

export default createAppContainer(Nav);