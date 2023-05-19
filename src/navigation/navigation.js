import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import Login from '../screens//Login/Login.screen'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../components/header'
import IntroScreen from '../screens/IntroScreen'
import Signup from '../screens/Signup/signup.screen'
import PhoneVerify from '../screens/PhoneVerify/phoneVerify.screen'
import OtpVerify from '../screens/OtpVerify/OtpVerify.screen'
import MainHeader from '../components/mainHeader'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function AuthTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      header: (props) => (<MainHeader title={"Products"} />)
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Create Order"
        component={Profile}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={focused ? color : '#000'} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

function simplePage() {
  return (
    <Stack.Navigator
    screenOptions={{
      header: (props) => (<Header {...props} />)
    }}>
      {/* {props.introScreen?.isVisible == undefined ? ( */}
      {/* <Stack.Screen name="IntroScreen" component={introScreen} /> */}
      {/* ) : null}  */}
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
      <Stack.Screen
        name="PhoneVerify"
        component={PhoneVerify}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
      <Stack.Screen
        name="OtpVerify"
        component={OtpVerify}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
     
      {/* <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TermsOfUSe" component={TermsOfUSe}  options={{back:true}}/> */}
    </Stack.Navigator>
  )
}


const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeBase" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="WithoutAuth"
          options={{ headerShown: false }}
          component={simplePage}
        />
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={AuthTabs}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
