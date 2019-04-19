import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import DiaryTab from './src/diary/index.js';
import MessageTab from './src/message/index.js';
import MineTab from './src/mine/index.js';
import CommunityTab from './src/community/index.js';
import TabIcon from './src/widget/tabIcon/index.js';
import Color from './src/widget/color.js';
import TabBar from './src/widget/tabBar/index.js';

const TabNavigator = createBottomTabNavigator({
  DiaryTab: { 
    screen: DiaryTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '日记',
      tabBarIcon: ( {focused} ) => (
        <TabIcon 
          focused={focused}
          imageSource={require('./src/widget/tabIcon/images/record_gray.png')}
          selectImageSource={require('./src/widget/tabIcon/images/record_blue.png')}
        />
      )
    } )
  },
  CommunityTab: { 
    screen: CommunityTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '社区',
      tabBarIcon: ( {focused} ) => (
        <TabIcon 
          focused={focused}
          imageSource={require('./src/widget/tabIcon/images/community_gray.png')}
          selectImageSource={require('./src/widget/tabIcon/images/community_blue.png')}
        />
      )
    } ) 
  },
  MessageTab: { 
    screen: MessageTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '消息',
      tabBarIcon: ( {focused} ) => (
        <TabIcon 
          focused={focused}
          imageSource={require('./src/widget/tabIcon/images/news_gray.png')}
          selectImageSource={require('./src/widget/tabIcon/images/news_blue.png')}
        />
      )
    } ) 
  },
  MineTab: { 
    screen: MineTab,
    navigationOptions: ( {navigation} ) => ( {
      tabBarLabel: '我的',
      tabBarIcon: ( {focused} ) => (
        <TabIcon 
          focused={focused}
          imageSource={require('./src/widget/tabIcon/images/my_gray.png')}
          selectImageSource={require('./src/widget/tabIcon/images/my_blue.png')}
        />
      ),
    } ) 
  }
},
{
  tabBarComponent: props => (
    <TabBar {...props} />
  ),
  tabBarPosition: 'bottom',
  lazy: true,
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions:{
      activeTintColor: Color.primaryTabColor,
      inactiveTintColor: Color.grayTabColor,
      style: {backgroundColor:'#ffffff'},
  },
}
);

const Nav = createStackNavigator(
  {
    Tab:{
      screen: TabNavigator,
    }
  },  
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)
const AppContainer =  createAppContainer(Nav);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}