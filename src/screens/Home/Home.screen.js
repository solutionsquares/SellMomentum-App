import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import SearchInput from '../../components/searchInput'
import SagmentView from '../../components/sagment'
import { fetchCategories } from '../../stores/product&Category.reducer'
import { fetchSellerProduct } from '../../stores/sellerProducts.reducer'
import { FloatingAction } from "react-native-floating-action";
import CategoryComponent from '../../components/categoryComponents/categoryComponents'
import CustomButton from '../../components/buttonComponents/buttonComponents'
import { ScrollView } from 'react-native-gesture-handler'
import ProductsListingComponents from '../../components/productsListingComponents/productsListing'
const global = require('../../core/theme');

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [ApiLoader, setApiLoader] = useState(false);
  const user = useSelector(state => state?.user?.entities?.undefined)
  const all = useSelector(state => state)
  const sagmentData = [
    { id: 1, name: 'Sort by', icon: 'sort-amount-desc' },
    { id: 2, name: 'Location', icon: 'map-marker' },
    { id: 3, name: 'Category', icon: 'th-list' },
    // Add more items as needed
  ];
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState()
  const actions = [
    {
      text: "Category",
      icon: require("../../assets/icons/menu.png"),
      name: "categoryBtn",
      position: 1,
      color: '#33907C'
    },
    {
      text: "Product",
      icon: require("../../assets/icons/box.png"),
      name: "productBtn",
      position: 2,
      color: '#33907C'
    }
  ];
  const data = [
    { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/images/test.jpeg') },
    { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/images/test.jpeg') },
    { id: 3, title: 'Product 3', price: '$30', image: require('../../assets/images/test.jpeg') },
    { id: 4, title: 'Product 3', price: '$30', image: require('../../assets/images/test.jpeg') },
    // Add more data objects as needed
  ];
  const datas = [
    { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/images/gs1.png') },
    { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/images/gs2.png') },
    { id: 3, title: 'Product 3', price: '$30', image: require('../../assets/images/gs3.png') },
  ];
  useEffect(() => {
    // getData()
    // fetchProducts(user?.user._id)
    getCategories();
  }, [])
  async function getCategories() {
    console.log('getCategories',user.token)
    await dispatch(fetchCategories(user.token)).then((res) => {
      console.log(res);
      if (res.payload) {
        const top7Categories = res.payload?.data?.slice(0, 8);
        setCategories(top7Categories)
      }
    }).catch((err) => {
      console.log(err);
    })
  }


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
  const gotoProductDetail = (params) => {
    navigation.navigate('ProductDetail')

  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => gotoProductDetail()}>
      <View style={styles.cardContainer} >
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={global.productLabelColor}>{item.title}</Text>
        </View>
        <View style={global.padding10}>
          <View style={[styles.containerCenterd,]}>
            <View style={[styles.leftText]}>
              <View style={global.smallCircle}>
                <Text style={styles.letter}>T</Text>
              </View>
            </View>
            <View style={[styles.leftText]}>
              <Text style={{ color: 'green' }}>Tradly</Text>
            </View>
            <View style={[styles.rightText]}>
              <Text>$10</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // <ProductsListingComponents data={item}></ProductsListingComponents>
  );

  const renderItemStoreItems = ({ item }) => (
    // <TouchableOpacity style={styles.cardContainer} >
    <View style={styles.cardContainer} >
      <Image source={item.image} style={styles.image} />
      <View style={global.centerCss}>
        <View style={[global.bigCircle, { marginTop: -30 }]}>
          <Text style={[global.fontSize20, global.whiteColor]}>T</Text>
        </View>
      </View>
      <View style={[styles.containerCenterd, global.centerCss, global.paddingTop20]}>
        <Text>Tradly</Text>
      </View>
      <View style={[global.marginLeft30, global.marginRight30]}>
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
      <StatusBar barStyle="light-content" style={[global.primaryBGColor]} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.MainContainer}>
        <SearchInput bgColor={true}/>
          <ScrollView >
          <View style={{padding:10}}>
              <FlatList
                data={datas}
                style={{}}
                horizontal
                contentContainerStyle={{ height: 200, padding: 5 }}
                showsHorizontalScrollIndicator={true}
                ItemSeparatorComponent={() => (
                  <View style={{ backgroundColor: 'white', width: 20 }} />
                )}

                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{ flex: 1, position: 'relative' }}>
                    <Image
                      source={item.image}
                      style={[styles.image, {
                        width: Math.floor(Dimensions.get('window').width - 50),
                        height: '100%',
                        resizeMode: 'cover',
                      }]}
                    />
                
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => item.image_url + index}
              />
            </View>
            <View style={[global.paddingHorizontal20]}>
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

            <View style={global.paddingHorizontal20}>
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
            <View style={[global.paddingHorizontal20, styles.viewheight, global.marginTop20, global.primaryBGColor]}>
              <View style={[styles.containerCenterd, global.paddingTop10]}>
                <Text style={[styles.leftText, global.whiteColor]}>Store to follow</Text>
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
            <View style={[global.paddingHorizontal20, { marginTop: -150, }]}>
              <FlatList
                data={data}
                renderItem={renderItemStoreItems}
                keyExtractor={(item) => item.id.toString()}
                horizontal
              />
            </View>
           

          </ScrollView>

          <FloatingAction
            actions={actions}
            visible={true}
            showBackground={true}
            overlayColor='rgba(51, 144, 124, 0.1)'
            // color={global.colors.primary}
            color={'#33907C'}
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
