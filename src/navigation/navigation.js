import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import Login from '../screens//Login/Login.screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../components/header'
import IntroScreen from '../screens/IntroScreen'
import Signup from '../screens/Signup/signup.screen'
import PhoneVerify from '../screens/PhoneVerify/phoneVerify.screen'
import OtpVerify from '../screens/OtpVerify/OtpVerify.screen'
import MainHeader from '../components/mainHeader'
import AddProduct from '../screens/Product/addProduct'
import ProductDetail from '../screens/Product/productDetail'
import WishList from '../screens/WishList/wishList'
import CartComponent from '../screens/Cart/cart'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const theme = require('../core/theme');

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
            return <FontAwesome name={'home'} size={20} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Browse"
        component={Profile}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name={'search'} size={20} style={[focused ? theme.primaryColor : theme.grayColor]}/>
          }
        }}
      />
      <Tab.Screen
        name="Product"
        component={Profile}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome5 name={'store'} size={20} style={[focused ? theme.primaryColor : theme.grayColor]} />
          }
        }}
      />
      <Tab.Screen
        name="Order History"
        component={Profile}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name={'text-document-inverted'} size={20} style={[focused ? theme.primaryColor : theme.grayColor]} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome5 name={'user-alt'} size={20} style={[focused ? theme.primaryColor : theme.grayColor]} />
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
            return <FontAwesome name={'ios-settings'} size={25} color={color} />
          }
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
      <Stack.Screen
        name="PhoneVerify"
        component={PhoneVerify}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
      <Stack.Screen
        name="OtpVerify"
        component={OtpVerify}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name={'ios-settings'} size={25} color={color} />
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
        {/* <Stack.Screen
          name="WithoutAuth"
          options={{ headerShown: false }}
          component={simplePage}
        /> */}
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={AuthTabs}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            headerShown: true,
            title: 'Add Product',
            headerStyle: {
              backgroundColor:'#33907C'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor:'#33907C'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Wishlist"
          component={WishList}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor:'#33907C'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CartComponents"
          component={CartComponent}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor:'#33907C'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
