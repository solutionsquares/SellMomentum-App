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
import Icon from 'react-native-vector-icons/Entypo';
import Input from '../../components/textInput';
import { ToastMsg } from '../../utils/notification';
import { constant } from '../../constant/constant';
// import {  registerUsers } from '../../stores/registerUser.reducer'
import { registerUsers } from '../../stores/user.reducer';
import { useDispatch, useSelector } from 'react-redux'


import validationMessages from "../../utils/validationMessages.json"

const theme = require('../../core/theme');
const Signup = ({ navigation }) => {
  const [firstName, setFirstName]= useState();
  const [lastName, setLastName]= useState();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [reEnterpassword, setReEnterPassword] = useState()
  const [show, setShow] = useState(true);
  const [reEnterPasswordShow, setReEnterPasswordShow] = useState(true);

  const dispatch = useDispatch()

  function loginPage() {
    navigation.replace('Login', { screen: 'Login' })

  }
  async function createUser() {
    validateFields()
    if(validateFields() == true){
      await dispatch(registerUsers({
        name:firstName,
        email: email,
        password: password
      })).then(async (res) => {
        if (res) {
          console.log("res", res)
          if(res.payload.status === 400){
            ToastMsg(constant.errorActionTypes.error, 'Error', res.payload.message)
          }else{
            navigation.replace('HomeBase', { screen: 'Home' })
          }
          // ToastMsg(constant.errorActionTypes.success, 'Success', 'OTP successfully send')
          // navigation.replace('HomeBase', { screen: 'Home' })
          // navigation.navigate('PhoneVerify', { screen: 'Home', confirm: response })
        } else {
          console.log("error")
        }
  
      }).catch(async error=>{
        console.log(error)
        // DialogMsg(constant.errorActionTypes.error, 'Error', 'Invalid password')
  
      })    }

    // navigation.navigate('WithoutAuth', { screen: 'PhoneVerify' })
  }

  const validateFields = () => {
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!firstName.match(nameRegex)) {
              ToastMsg(constant.errorActionTypes.error, 'DANGER', validationMessages.firstName)

      return false;
    }

    if (!lastName || !lastName.match(nameRegex)) {
      ToastMsg(constant.errorActionTypes.error, 'DANGER', validationMessages.lastName)

      // Alert.alert('Invalid Last Name', 'Please enter a valid last name.');
      return false;
    }

    if (!email.match(emailRegex)) {
      ToastMsg(constant.errorActionTypes.error, 'DANGER', validationMessages.email)

      // Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    if (!password.match(passwordRegex)) {
      console.log(password)
      ToastMsg(constant.errorActionTypes.error, 'DANGER', validationMessages.password)
      return false;
    }
    
    if (password !== reEnterpassword) {
      ToastMsg(constant.errorActionTypes.error, 'DANGER',validationMessages.passwordMismatch)
      // Alert.alert('Passwords Do Not Match', 'Please re-enter the password correctly.');
      return false;
    }
    return true;


    // All fields are valid, proceed with signup logic
    // ...
  };

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
           <Input
            label="First Name"
            returnKeyType="next"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            autoCapitalize="none"
            autoCompleteType="text"
            textContentType="text"
            keyboardType={'text'}
            maxLength={100}
            placeholderTextColor={'#fff'}
            selectionColor="#fff"
            style={theme.input}
          />
          <Input
            label="Last Name"
            returnKeyType="next"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            autoCapitalize="none"
            autoCompleteType="text"
            textContentType="text"
            keyboardType={'text'}
            maxLength={100}
            placeholderTextColor={'#fff'}
            selectionColor="#fff"
            style={theme.input}
          />
          <Input
           label="Email ID"
            returnKeyType="next"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="email"
            keyboardType={'email'}
            maxLength={100}
            placeholderTextColor={'#fff'}
            selectionColor="#fff"
            style={theme.input}
          />
     
     <View style={[theme.rowView,theme.alignItemCenter]}>
          <Input
            label="Password"
            returnKeyType="next"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            autoCompleteType="text"
            textContentType="text"
            keyboardType={'text'}
            maxLength={100}
            placeholderTextColor={'#fff'}
            selectionColor="#fff"
            style={theme.input}
            secureTextEntry={show}
          />
          <Icon
            name={show ? 'eye' :'eye-with-line'}
            size={20}
            style={[theme.whiteColor,theme.margin40M,theme.marginTop60M]}
            onPress={() =>
              setShow(!show)
            }></Icon>
            </View>
          <View style={[theme.rowView,theme.alignItemCenter]}>
        <Input
            label=" ReEnter Password"
            returnKeyType="next"
            value={reEnterpassword}
            onChangeText={(text) => setReEnterPassword(text)}
            autoCapitalize="none"
            autoCompleteType="text"
            textContentType="text"
            keyboardType={'text'}
            maxLength={100}
            placeholderTextColor={'#fff'}
            selectionColor="#fff"
            style={theme.input}
            secureTextEntry={reEnterPasswordShow}
          />
             <Icon
            name={reEnterPasswordShow ? 'eye' :'eye-with-line'}
            size={20}
            style={[theme.whiteColor,theme.margin40M,theme.marginTop60M]}
            onPress={() =>
              setReEnterPasswordShow(!reEnterPasswordShow)
            }></Icon>
          </View>
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
