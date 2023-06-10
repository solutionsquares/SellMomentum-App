import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'
const theme = require('../../core/theme');
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  function loginPage() {
    navigation.replace('Login', { screen: 'Login' })

  }
  function createUser() {
    navigation.navigate('WithoutAuth', { screen: 'PhoneVerify' })
  }

  return (
    <>

      <View style={theme.container}>
        <StatusBar barStyle="light-content" style={[theme.primaryBGColor]}/>
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteTitle, styles.allMargen]}>Welcome to tradly</Text>
        </View>
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteText, styles.allMargen]}>Signup to your account</Text>
        </View>
        <TextInput
          style={theme.input}
          placeholder="First Name"
          placeholderTextColor="white"
        />
        <TextInput
          style={theme.input}
          placeholder="Last Name"
          placeholderTextColor="white"
        />
        <TextInput
          style={theme.input}
          placeholder="Email ID/Phone Number"
          placeholderTextColor="white"
        />
        <TextInput
          style={theme.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
        />
        <TextInput
          style={theme.input}
          placeholder="Re-enter Password"
          placeholderTextColor="white"
          secureTextEntry
        />
        <TouchableOpacity onPress={() => createUser()}>
          <View style={[styles.nextButton,theme.whiteBGColor]}>

            <Text style={[styles.buttonText,theme.primaryColor]}>Create</Text>

          </View>
        </TouchableOpacity>
        <View style={[theme.centerCss, theme.rowView, styles.allMargen]}>
          <View >
            <Text style={[theme.whiteText]}>Have an account ? </Text>
          </View>
          <TouchableOpacity onPress={() => loginPage()}>
            <View>
              <Text style={[theme.whiteText, styles.boldText]}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "900"
  },
  allMargen: {
    margin: 20
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
  }

})

export default Signup
