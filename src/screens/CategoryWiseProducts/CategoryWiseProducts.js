import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { getCategories } from '../../api/productApi';
const theme = require('../../core/theme');
const { width } = Dimensions.get("window");
 import SagmentView from '../../components/sagment'

import styles from '../Home/Home.style'


const CategoryWiseProducts = (props) => {
    console.log(props)
    const navigation =props.navigation
    const [categoriesId, setCategoriesId] = useState(props.route.params?.categoryDetails._id)
    const sagmentData = [
        { id: 1, name: 'Sort by', icon: 'sort-amount-desc' },
        { id: 2, name: 'Location', icon: 'map-marker' },
        { id: 3, name: 'Category', icon: 'th-list' },
        // Add more items as needed
      ];
    const data = [
        {
            "_id": "649ea1f7200b02367e1330eb",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "Wireless earphone - ab",
            "description": "test12@gmail.com",
            "price": 1200,
            "inStock": 4,
            "isProductDeleted": true,
           image: require('../../assets/images/test.jpeg') 
        },
        {
            "_id": "64a3dc02aba3cf19b22f45c0",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "Wireless earphone - abcs",
            "description": "any",
            "price": 1500,
            "inStock": 8,
            "isProductDeleted": true,
           image: require('../../assets/images/test.jpeg') 
        },
        {
            "_id": "64a3deaaaba3cf19b22f45cf",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "testing",
            "description": "research",
            "price": 250,
            "inStock": 12,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
                
            
        },
        {
            "_id": "64a51524a184ff6c6c50f93c",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "test 07",
            "description": "wow",
            "price": 25,
            "inStock": 20,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
             
            
        },
        {
            "_id": "64a515c2a184ff6c6c50f940",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "test 08",
            "description": "wow",
            "price": 25,
            "inStock": 20,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
              
            
        },
        {
            "_id": "64a515e8a184ff6c6c50f944",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "test 09",
            "description": "wow",
            "price": 25,
            "inStock": 20,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
              
            
        },
        {
            "_id": "64a51601a184ff6c6c50f948",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "Wireless earphone",
            "description": "You can enjoy high-quality visuals with the help of the Dell 68.58 cm (27) S2721HN Monitor. Featuring a three-sided thin bezel design and a Full HD display with a resolution of up to 1920x1080p, this monitor renders exceptional clarity. It boasts In-Plane Switching technology and a wide viewing angle of 178°/178° for consistent colours and seamless viewing. Also, thanks to AMD FreeSync technology and a refresh rate of 75 Hz, this monitor offers a smooth and tear-free viewing experience.",
            "price": 30,
            "inStock": 4,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
               
        },
        {
            "_id": "64a523eca184ff6c6c50f96c",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "p001",
            "description": "ewsrr",
            "price": 25,
            "inStock": 2,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
                
            
        },
        {
            "_id": "64ace83ce131347cc00d2141",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "cake",
            "description": "pastry cake",
            "price": 20,
            "inStock": 10,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 
             
        },
        {
            "_id": "64ace9eae131347cc00d2148",
            "sellerId": "649a755dfa96895a72ea74e8",
            "categoryId": {
                "name": "Bread & Bakery"
            },
            "name": "pastry cacke",
            "description": "cake",
            "price": 22,
            "inStock": 12,
            "isProductDeleted": false,
           image: require('../../assets/images/test.jpeg') 

            
        }
    ]
    useEffect(() => {
        if (categoriesId) {
            getCategoryWiseProduct()
        }
    }, [])
    const gotoProductDetail = (params) => {
        console.log(params)
        navigation.navigate('ProductDetail',{productsDetails:params})
    
      }
    async function getCategoryWiseProduct() {
        // getCategoriesWiseProducts().then(async (res) => {
        //     if (res) {
        //       console.log("res", res)
        //       setLoading(false)
        //       if(res.status == 200){
        //         ToastMsg(constant.errorActionTypes.success, 'Success', 'Your Product SuccessFully Add')
        //       }else if(res.status === 400){
        //         ToastMsg(constant.errorActionTypes.error, 'DANGER', res.message)
        //         if(res.message === "jwt expired"){
        //         }

        //       }
        //       try {
        //       } catch (error) {
        //         console.log("error", error)
        //       }
        //     } else {
        //       setLoading(false)
        //     }
        //   })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => gotoProductDetail(item)}>
        <View style={styles.cardContainer} >
          <Image source={item.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={theme.productLabelColor}>{item.name}</Text>
          </View>
          <View style={theme.padding10}>
            <View style={[styles.containerCenterd,]}>
              <View style={[styles.leftText]}>
                <View style={theme.smallCircle}>
                  <Text style={styles.letter}>T</Text>
                </View>
              </View>
              <View style={[styles.leftText]}>
                <Text style={{ color: 'green' }}>Tradly</Text>
              </View>
              <View style={[styles.rightText]}>
                <Text>${item.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )

    return (
        <View>
            <View style={[theme.primaryBGColor,theme.paddingTop10]}>
                <SagmentView sagmentData={sagmentData}></SagmentView>
            </View>
            <View style={[styles.container,]}>
                <FlatList
                 contentContainerStyle={{paddingBottom:200}} 
                    horizontal={false}
                    numColumns={2}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </View>
            <View>
                <Text>test</Text>
            </View>
        </View>
    );
};



export default CategoryWiseProducts;
