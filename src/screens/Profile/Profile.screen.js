import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert

} from 'react-native'
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose } from '../../utils/notification'
import { constant } from '../../constant/constant';
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../../stores/user.reducer';
const theme = require('../../core/theme');

const Profile = ({ navigation }) => {
  console.log(navigation)
  // const { navigate } = navigation 

  const dispatch = useDispatch()
  const user = useSelector(state => state?.user?.entities?.undefined)
  console.log(user)
  const logout = async() => {
    console.log("logOut")
    await dispatch(LogoutUser(user.token)).then(async (res) => {
      if (res) {
        console.log("res", res)
        // navigation.navigate('Login')
        navigation.replace('WithoutAuth', { screen: 'login' })


        // setProducts(res.payload.data)
        try {
        } catch (error) {
          console.log("error", error)
        }

        setApiLoader(false)

      } else {
        setApiLoader(false)
      }

    })

  }

    const createTwoButtonAlert = () =>
      Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'CANCEL',
        },
        {text: 'SIGN OUT', onPress: () => logout()},
      ]);
  return (
    <>
      <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <View style={[styles.topHalf, theme.primaryBGColor]} >
        <View style={[theme.rowView, theme.padding20]}>
          <View style={[theme.largeCircle, theme.borderWidthCss, , theme.borderColorWhite,]}>
            <Text style={[theme.whiteColor, theme.fontSize20, theme.fontBold]}>T</Text>
          </View>
          <View style={{ paddingStart: 20 }}>
            <Text style={[theme.fontBold, theme.whiteColor, theme.fontSize20]}>{user?.user?.name}</Text>
            <Text style={[theme.paddingTop5, theme.whiteColor]}>+91 9898989898</Text>
            <Text style={[theme.whiteColor]}>{user?.user?.email}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomHalf, theme.grayBGColor]} />
      <View style={[styles.overlay, theme.whiteBGColor,]}>
        <View style={[styles.slider, styles.overlayContent,]}>
          <Text>Edit Profile</Text>
        </View>
        <View style={[styles.slider, styles.overlayContent]}>
          <Text>Language & Currency </Text>
        </View>
        <View style={[styles.slider, styles.overlayContent]}>
          <Text>Feedback</Text>
        </View>
        <View style={[styles.slider, styles.overlayContent]}>
          <Text>Refer a Frind</Text>
        </View>
        <View style={[styles.slider, styles.overlayContent]}>
          <Text>Terms & Coditions</Text>
        </View>
        <View style={[styles.slider, styles.overlayContent]}>
          <TouchableOpacity onPress={createTwoButtonAlert}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View >
    </>
  )
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  // section: {
  //   flex: 1,
  //   padding: 20,
  // },
  // cardContainer: {
  //   backgroundColor: 'orange',

  //   // paddingTop:20,
  //   paddingBottom: 20
  // },
  // containerCenterd: {
  //   // flexDirection: 'row',
  //   // justifyContent: 'space-between',
  //   // alignItems: 'center',
  // },

  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    // backgroundColor: theme.colors.primary, // Replace with your desired color
  },
  bottomHalf: {
    flex: 1,
    // backgroundColor: theme.colors.white, // Replace with your desired color
  },
  overlay: {
    position: 'absolute',
    alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    top: '25%',
    width: '85%',
    height: '50%',
    // backgroundColor: theme.colors.white,
    borderRadius: 8
  },
  landscapeOverlay: {
    top: 0,
    height: '100%',
  },
  overlayContent: {
    // alignItems: 'center',

  },
  description: {
    // color: theme.colors.primary,
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Montserrat',
    fontSize: 20,
    alignItems: "flex-end"
  },
  nextButton: {
    // backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imageCss: {
    width: 50,
    height: 150
  },
  slider: {
    padding: 15
  }

})

export default Profile
