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
import { fetchSellerProduct } from '../../stores/product&Category.reducer'
// import ImageSlider from '../../components/imageSlider'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [ApiLoader, setApiLoader] = useState(false);
  const all = useSelector(state => state)
  const data = [
    { id: 1, name: 'Sort by',icon:'sort-amount-desc' },
    { id: 2, name: 'Location',icon:'map-marker' },
    { id: 3, name: 'Category',icon:'th-list' },
    // Add more items as needed
  ];
  const user = useSelector(state => state?.user?.entities?.undefined)
  const [products, setProducts] = useState()
  useEffect(() => {
    // getData()
    fetchProducts(user.user._id)
    console.log(all)
  }, [])

  async function fetchProducts(id){
    setApiLoader(true)
    await dispatch(fetchSellerProduct(id)).then(async (res) => {
      if (res) {        
        console.log("res",res)
        setProducts(res.payload.data)
        try {
        } catch (error) {
          console.log("error",error)
        }
        
        setApiLoader(false)
        
      } else {
        setApiLoader(false)
      }

    })
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
              data={products}
              renderItem={({ item }) =>
                <View key={item.id} style={styles.styleUser}>
                  <Text style={{ fontSize: 15 }}>
                    {item.name}
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
