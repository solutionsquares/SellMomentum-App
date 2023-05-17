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
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function AuthTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Order List"
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
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

function OpenTabs() {
  return (
    <Stack.Navigator screenOptions={{
      header: (props) => (<Header {...props} />)}}>
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
      name="login" 
      component={Login}
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="WithoutAuth"
          options={{ headerShown: false }}
          component={OpenTabs}
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
