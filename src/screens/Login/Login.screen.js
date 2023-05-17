import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native'
import styles from './Login.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../stores/user.reducer'
import BackButton from '../../components/backButton'
import Input from '../../components/textInput'
import Header from '../../components/header'
import { theme } from '../../core/theme'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose} from '../../utils/notification'
import { constant } from '../../constant/constant'
const Login = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }

  function LoginFun(){
    // console.log("LoginFun")
    DialogMsg(constant.errorActionTypes.success,'Success','Congrats! this is dialog box success')
    setTimeout(()=>{
      DialogMsgClose()
      navigation.replace('HomeBase',{screen:'Home'})
    },3000)
    
  }



  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      {/* <SafeAreaView style={styles.SafeAreaView1} /> */}
      <SafeAreaView style={styles.SafeAreaView2}>
        {/* <BackButton goBack={navigation.goBack} /> */}
        {/* <Logo /> */}
        {/* <Header>Welcome back.</Header> */}
        <Input
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Input
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        {/* <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View> */}
        {/* <Button onPress={onLoginPressed}>
          <Text>Login</Text>
        </Button> */}
        <View style={styleUser.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => LoginFun()}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  )
}

const styleUser = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    justifyContent:"center",
    alignItems:"center",
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default Login
