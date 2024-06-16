import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/Home';
import Icon from "react-native-vector-icons/AntDesign"
import { Image, View } from 'react-native';
import { bottomNavStyles } from '../../utils/GlobalStylesSheet';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: bottomNavStyles.footer,
        tabBarItemStyle: {paddingBottom: 10},
        tabBarActiveTintColor: '#00A981',
      }}>
      <Tab.Screen name="Feed" component={Home}
        // options={
        options={
         {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              // <Icon name="retweet" size={20} />
              <Image style={bottomNavStyles.bottomIcons} source={require('../../assests/icons/Feed.png')} />
            )
          }
         }
        }
      />
      <Tab.Screen name="Library" component={() => <></>} 
      options={
        {
         headerShown: false,
         tabBarIcon: ({ focused, color, size }) => {
           return (
             // <Icon name="retweet" size={20} />
             <Image style={bottomNavStyles.bottomIcons} source={require('../../assests/icons/Library.png')} />
           )
         }
        }
       }
      />
      <Tab.Screen name="Add" component={() => <></>} 
      options={
         {
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              // <Icon name="retweet" size={20} />
              <Image style={bottomNavStyles.bottomAddIcon} source={require('../../assests/icons/Default.png')} />
            )
          }
         }
        }
      />
      <Tab.Screen name="Message" component={() => <></>} 
      options={
         {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              // <Icon name="retweet" size={20} />
              <Image style={bottomNavStyles.bottomIcons} source={require('../../assests/icons/Messages.png')} />
            )
          }
         }
        }
      />
      <Tab.Screen name="Services" component={() => <></>} 
      options={
         {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              // <Icon name="retweet" size={20} />
              <Image style={bottomNavStyles.bottomIcons} source={require('../../assests/icons/Services.png')} />
            )
          }
         }
        }
      />
    </Tab.Navigator>
  )
}
