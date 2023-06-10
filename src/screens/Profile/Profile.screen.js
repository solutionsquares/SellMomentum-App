import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import styles from '../Home/Home.style'
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose} from '../../utils/notification'
import { constant } from '../../constant/constant';
const theme = require('../../core/theme');
const Home = ({ navigation }) => {
  function logout(){
    DialogMsg(constant.errorActionTypes.success,'Logout','Congrats! this is dialog box success')
    setTimeout(()=>{
      DialogMsgClose()
      navigation.replace('WithoutAuth',{screen:'/'})
    },1000)
  }
  return (
    <>
      <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          {/* <Icon name={'ios-settings'} size={100} color={'green'} /> */}
          <View>
            
          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 10
          }}>
          <Text style={{ color: '#808080' }}>SS</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
