import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import DrawerContent from './components/DrawerContent'
import * as ColorPalette from "./ColorPalette";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation})=>{
  return(
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle:{
          backgroundColor: ColorPalette.black,
        },
        headerTintColor: ColorPalette.white,
        headerTitleStyle:{
          fontWeight:'bold',
        },
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'OverView',
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} backgroundColor={ColorPalette.black}
          onPress={()=>{navigation.openDrawer()}}
          >
          </Icon.Button>
        )
        
      }}/>
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen = ({navigation})=>{
  return(
    <DetailsStack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle:{
         backgroundColor: ColorPalette.black,
        },
        headerTintColor: ColorPalette.white,
        headerTitleStyle:{
          fontWeight:'bold',
        },
    }}>
      
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        title:'details',
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} backgroundColor={ColorPalette.black}
          onPress={()=>{navigation.openDrawer()}}
          >
          </Icon.Button>
        )
        
      }} />
    </DetailsStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

