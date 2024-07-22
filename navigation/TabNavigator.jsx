import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Setting from '../pages/Setting';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({route}) => {
   return (
      <Tab.Navigator
      style={styles.view}
      initialRouteName='Home'
         screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === "Home") {
                  [iconName, color, size] = focused
                     ? ['home', '#000', 30]
                     : ['home-outline', 'grey', 21];
               } else if (route.name === "Setting") {
                  [iconName, color, size] = focused
                     ? ['settings', '#fff', 30]
                     : ['settings-outline', 'grey', 21];
               }
               return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerBackgroundContainerStyle: "transparent",
            tabBarActiveTintColor: "#867edb",
				tabBarInactiveTintColor: "plum",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarIconStyle:{
               height: 20
            }
            
         })}
      >
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
   )
}

export default TabNavigator

const styles = StyleSheet.create({
   view:{
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30
   }
})