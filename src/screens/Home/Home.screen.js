import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import { theme } from '../../core/theme'
import SearchInput from '../../components/searchInput'
import SagmentView from '../../components/sagment'
import { fetchSellerProduct } from '../../stores/product&Category.reducer'
import { FloatingAction } from "react-native-floating-action";
import CategoryComponent from '../../components/categoryComponents/categoryComponents'
import CustomButton from '../../components/buttonComponents/buttonComponents'
import { ScrollView } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [ApiLoader, setApiLoader] = useState(false);
  const all = useSelector(state => state)
  const sagmentData = [
    { id: 1, name: 'Sort by', icon: 'sort-amount-desc' },
    { id: 2, name: 'Location', icon: 'map-marker' },
    { id: 3, name: 'Category', icon: 'th-list' },
    // Add more items as needed
  ];
  const categories = [
    { id: 1, category: 'Beverages', image: require('../../assets/images/categoriesImage/cat1.png') },
    { id: 2, category: 'Bread & Bakery', image: require('../../assets/images/categoriesImage/cat2.png') },
    { id: 3, category: 'Vegetables', image: require('../../assets/images/categoriesImage/cat3.png') },
    { id: 4, category: 'Fruit', image: require('../../assets/images/categoriesImage/cat4.png') },
    { id: 5, category: 'Egg', image: require('../../assets/images/categoriesImage/cat5.png') },
    { id: 6, category: 'Frozen veg', image: require('../../assets/images/categoriesImage/cat6.png') },
    { id: 7, category: 'Homecare', image: require('../../assets/images/categoriesImage/cat7.png') },
    { id: 8, category: 'Pet Care', image: require('../../assets/images/categoriesImage/cat8.png') },
  ];
  const user = useSelector(state => state?.user?.entities?.undefined)
  const [products, setProducts] = useState()
  const actions = [
    {
      text: "Category",
      icon: require("../../assets/icons/menu.png"),
      name: "categoryBtn",
      position: 1,
      color: theme.colors.primary
    },
    {
      text: "Product",
      icon: require("../../assets/icons/box.png"),
      name: "productBtn",
      position: 2,
      color: theme.colors.primary
    }
  ];
  const data = [
    { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/images/test.jpeg') },
    { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/images/test.jpeg') },
    { id: 3, title: 'Product 3', price: '$30', image: require('../../assets/images/test.jpeg') },
    { id: 4, title: 'Product 3', price: '$30', image: require('../../assets/images/test.jpeg') },
    // Add more data objects as needed
  ];
  useEffect(() => {
    // getData()
    fetchProducts(user?.user._id)
  }, [])

  async function fetchProducts(id) {
    setApiLoader(true)
    await dispatch(fetchSellerProduct(id)).then(async (res) => {
      if (res) {
        console.log("res", res)
        setProducts(res.payload.data)
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
  const handleButtonPress = () => {
    console.log('Button pressed!');
    // Handle button press here
  };
  const gotoProductDetail = (params)=> {
    navigation.navigate('ProductDetail')
    
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity  onPress={()=>gotoProductDetail()}>
    <View style={styles.cardContainer} >
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={theme.productLabelColor}>{item.title}</Text>
      </View>
      <View style={theme.padding10}>
        <View style={[styles.containerCenterd,]}>
          <View style={[styles.leftText]}>
            <View style={theme.smallCircle}>
              <Text style={styles.letter}>T</Text>
            </View>
          </View>
          <View style={[styles.leftText]}>
            <Text>Tradly</Text>
          </View>
          <View style={styles.rightText}>
            <Text>$10</Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  const renderItemStoreItems = ({ item }) => (
    // <TouchableOpacity style={styles.cardContainer} >
    <View style={styles.cardContainer} >
      <Image source={item.image} style={styles.image} />
      <View style={theme.centerCss}>
        <View style={[theme.bigCircle, { marginTop: -30 }]}>
          <Text style={[theme.fontSize20, theme.whiteColor]}>T</Text>
        </View>
      </View>
      <View style={[styles.containerCenterd, theme.centerCss, theme.paddingTop20]}>
        <Text>Tradly</Text>
      </View>
      <View style={[theme.marginLeft30, theme.marginRight30]}>
        <CustomButton
          title="Submit"
          onPress={handleButtonPress}
          width={110}
          backgroundColor={true}
          textColor={true}
        />
      </View>

    </View>

  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <ScrollView>
          <View >
            <SearchInput />
            <SagmentView sagmentData={sagmentData} />

            <View style={[theme.paddingHorizontal20]}>
              <View>
                <CategoryComponent data={categories} ></CategoryComponent>
              </View>
              <View>
                <View style={styles.containerCenterd}>
                  <Text style={styles.leftText}>New Product </Text>
                  <View style={styles.rightText}>
                    <CustomButton
                      onPress={handleButtonPress}
                      title="See All"
                      width={110}
                      backgroundColor={true}
                      textColor={true}
                    />
                  </View>
                </View>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                />
              </View>
            </View>

            <View style={theme.paddingHorizontal20}>
              <View>
                <View style={styles.containerCenterd}>
                  <Text style={styles.leftText}>Popular Product </Text>
                  <View style={styles.rightText}>
                    <CustomButton
                      onPress={handleButtonPress}
                      title="See All"
                      width={110}
                      backgroundColor={true}
                      textColor={true}
                    />
                  </View>
                </View>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                />
              </View>
            </View>
            <View style={[theme.paddingHorizontal20,styles.viewheight,theme.marginTop20,{backgroundColor: theme.colors.primary, }]}>
              <View style={[styles.containerCenterd, theme.paddingTop10]}>
                <Text style={[styles.leftText,theme.whiteColor]}>Store to follow</Text>
                <View style={styles.rightText}>
                  <CustomButton
                    onPress={handleButtonPress}
                    title="View All"
                    width={110}
                    backgroundColor={false}
                    textColor={false} />
                </View>
              </View>
            </View>
            <View style={[theme.paddingHorizontal20,{marginTop: -150, }]}>
              <FlatList
                data={data}
                renderItem={renderItemStoreItems}
                keyExtractor={(item) => item.id.toString()}
                horizontal
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.container}>
          <FloatingAction
            actions={actions}
            visible={true}
            showBackground={true}
            overlayColor='rgba(51, 144, 124, 0.1)'
            color={theme.colors.primary}
            onPressItem={name => {
              // console.log(`selected button: ${name}`);
              name == 'categoryBtn' ? '' : '';
              name == 'productBtn' ? navigation.navigate('AddProduct') : '';
            }}
          />
        </View>
      </SafeAreaView>
    </>
  )
}


export default Home
