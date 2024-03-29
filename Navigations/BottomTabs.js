import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from 'react-native'
import React from 'react'

import HomeScreen from "../Screens/HomeScreen";
import { colors } from "../Screens/colors";
import Savings from "../Screens/Savings";
import Resources from "../Screens/Resources";
import Profile from "../Screens/Profile";

const BottomTab = createBottomTabNavigator();



export default function BottomTabs() {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {  
                        tabBarLabel : "Home" ,
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Screens/Images/house.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primColor}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />

<BottomTab.Screen 
                name="Savings"
                component={Savings}
                options={
                    {  
                        tabBarLabel : "Savings" ,
                        headerShown: true,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Screens/Images/money-suitcase.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primColor}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />

<BottomTab.Screen 
                name="Resources"
                component={Resources}
                options={
                    {  
                        tabBarLabel : "Resources" ,
                        headerShown: true,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Screens/Images/book.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primColor}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
            
            <BottomTab.Screen 
                name="Profile"
                component={Profile}
                options={
                    {  
                        tabBarLabel : "Profile" ,
                        headerShown: true,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../Screens/Images/profile.png')}
                                style={{width:30, height:30, }}
                                tintColor={colors.primary}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            /> 
            
    </BottomTab.Navigator>
  )
}