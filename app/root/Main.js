// implement the navigation here.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';


export default function Main() {
    const Tab = createBottomTabNavigator();
    const HomeStack = createStackNavigator();
    const DashboardStack = createStackNavigator();

    function HomeStackScreen() {
      return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
      );
    }

    function DashboardStackScreen() {
        return (
          <DashboardStack.Navigator>
            <DashboardStack.Screen name="Dashboard" component={Dashboard} />
          </DashboardStack.Navigator>
        );
      }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                  name="Home" 
                  component={HomeStackScreen} options={({route}) => ({
                      headerStyle: {backgroundColor: '#177AC3'}, 
                      headerTitle: 'Home'  })
                  }/>
                <Tab.Screen name="Dashboard" component={DashboardStackScreen} /> 
            </Tab.Navigator>
        </NavigationContainer>
    ) 
}

