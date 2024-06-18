import React, { useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/Home';
import Icon from "react-native-vector-icons/AntDesign"
import { Image, TouchableOpacity, View } from 'react-native';
import { bottomNavStyles } from '../../utils/GlobalStylesSheet';
import AddPost from '../../component/addPost';
import FloatingButton from '../../component/floatingButton';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {


  return (
      <>
          {/* <AddPost openAddPostModal={openAddPostModal} setOpenAddPostModal={setOpenAddPostModal}/> */}

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
            // tabPress={()=>setOpenAddPostModal(true)}
      options={
         {
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              // <FloatingButton />
              <TouchableOpacity>
              <Image style={bottomNavStyles.bottomAddIcon} source={require('../../assests/icons/Default.png')} />
              </TouchableOpacity>
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
      </>
  )
}
