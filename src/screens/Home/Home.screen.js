import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([{
    id: 1,
    employee_name: 'Sagar'
  },{
    id: 1,
    employee_name: 'Sagar'
  },{
    id: 1,
    employee_name: 'Sagar'
  },{
    id: 1,
    employee_name: 'Sagar'
  },{
    id: 1,
    employee_name: 'Sagar'
  },{
    id: 1,
    employee_name: 'Sagar'
  }])

  useEffect(() => {
    // getData()
  }, [])

  async function getData() {
    await dispatch(selectAll()).then((res) => {
      setUsers(res.payload.data)
      console.log(res)
      // setUsers(dispatch(res.payload.data))
    })
    // await setUsers(dispatch(selectAll()))
  }
  // useEffect(()=>{
  //   ListUser()
  // },[users])

  // function ListUser() {
  //   console.log("ListUser")
  //   if (users.length > 0) {
  //     console.log("users", users)
  //     return users.map(data => {
  //       return (
  //         <View key={data.id} style={styleUser}>
  //           <Text style={{ fontSize: 15 }}>
  //             {data.employee_name}
  //           </Text>
  //         </View>
  //       )
  //     })
  //   }

  // }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          {/* <Icon name={'ios-person'} size={100} color={'purple'} />
          <Icon name={'ios-home'} size={100} color={'purple'} /> */}

          <View>
            {/* <TouchableOpacity
              style={styles.buttonStyle}
            onPress={() => getData()}
            >
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity> */}
            <FlatList
              data={users}
              renderItem={({ item }) =>
                <View key={item.id} style={styles.styleUser}>
                  <Text style={{ fontSize: 15 }}>
                    {item.employee_name}
                  </Text>
                </View>
              }
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}


export default Home
