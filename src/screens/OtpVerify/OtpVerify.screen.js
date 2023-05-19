import React, { useRef, useState } from 'react'
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
const OtpVerify = ({ navigation }) => {
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  async function verifyOtpFun() {
    setApiLoader(true)
    console.log("props.route.params.confirm", props.route.params.confirm)
    try {
      await props.route.params.confirm.confirm(otpCode.join(''));
      setApiLoader(false)
      navigation.replace('login')

    } catch (error) {
      setApiLoader(false)
      ToastMsg(constant.errorActionTypes.error, 'Error', 'Invalid code.')
    }
  }

  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpArrayCopy = otpCode.concat();
      otpArrayCopy[index] = value;
      setOtpCode(otpArrayCopy);
      if (value !== '') {
        if (index === 0) {
          ref_input2.current.focus();
        } else if (index === 1) {
          ref_input3.current.focus();
        }
        else if (index === 2) {
          ref_input4.current.focus();
        }
        else if (index === 3) {
          ref_input5.current.focus();
        }
        else if (index === 4) {
          ref_input6.current.focus();
        }
      }
    };
  };
  const refCallback = textInputRef => node => {
    console.log(node)
    textInputRef.current = node;
  };
  const onOtpKeyPress = index => {
    return ({ nativeEvent: { key: value } }) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpCode[index] === '') {
        if (index === 1) {
          ref_input1.current.focus();
        } else if (index === 2) {
          ref_input2.current.focus();
        }
        else if (index === 3) {
          ref_input3.current.focus();
        }
        else if (index === 4) {
          ref_input4.current.focus();
        }
        else if (index === 5) {
          ref_input5.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (index > 0) {
          const otpArrayCopy = otpCode.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpCode(otpArrayCopy);
        }
      }
    };
  };
  function homePage(){
    navigation.replace('HomeBase', { screen: 'Home' })
  }

  return (
    <>
      <View style={theme.container}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteTitle, styles.allMargen]}>Phone Verification</Text>
        </View>
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteText, styles.allMargen, styles.centerText]}>Enter your OTP code here</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {[ref_input1, ref_input2, ref_input3, ref_input4, ref_input5, ref_input6].map((item, index) => (
            <TextInput
              maxLength={1}
              key={index}
              value={otpCode[index]}
              keyboardType={'numeric'}
              style={styles.otpCss}
              selectionColor={theme.colors.white}
              onChangeText={onOtpChange(index)}
              autoFocus={index === 0 ? true : undefined}
              ref={refCallback(item)}
              onKeyPress={onOtpKeyPress(index)}
              autoComplete="sms-otp"
            />

          ))}
        </View>
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteText, styles.allMargen]}>Didn’t you received any code? </Text>
        </View>
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteText, styles.allMargen]}>Resent new code</Text>
        </View>
        <TouchableOpacity onPress={()=>homePage()}>
        <View style={styles.nextButton}>
         
            <Text style={styles.buttonText}>Next</Text>
          
        </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  allMargen: {
    margin: 20
  },
  centerText: {
    textAlign: "center"
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
  },
  otpCss:{
    borderBottomWidth:1,
    borderBottomColor:theme.colors.white,
    margin: 3,
    fontSize: 22,
    textAlign: "center",
    padding: 15,
    color: theme.colors.white
  }

})

export default OtpVerify
