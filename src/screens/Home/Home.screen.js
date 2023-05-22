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
import { theme } from '../../core/theme'
import SearchInput from '../../components/searchInput'
import SagmentView from '../../components/sagment'
// import ImageSlider from '../../components/imageSlider'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const user = useSelector(selectAll)
  const data = [
    { id: 1, name: 'Sort by',icon:'sort-amount-desc' },
    { id: 2, name: 'Location',icon:'map-marker' },
    { id: 3, name: 'Category',icon:'th-list' },
    // Add more items as needed
  ];
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
    console.log(user)
  }, [])

  
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
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View>
          <SearchInput />
          <SagmentView  sagmentData={data}/>
          {/* <ImageSlider /> */}
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
