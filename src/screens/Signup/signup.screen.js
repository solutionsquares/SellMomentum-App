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
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../stores/user.reducer'
import BackButton from '../../components/backButton'
import Input from '../../components/textInput'
import Header from '../../components/header'
import { theme } from '../../core/theme'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose } from '../../utils/notification'
import { constant } from '../../constant/constant'
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  function loginPage() {
    navigation.pop();
  }
  function createUser() {
    navigation.navigate('WithoutAuth', { screen: 'PhoneVerify' })
  }

  return (
    <>

      <View style={theme.container}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
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
          <View style={styles.nextButton}>

            <Text style={styles.buttonText}>Create</Text>

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
    backgroundColor: theme.colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.primary,
  }

})

export default Signup
