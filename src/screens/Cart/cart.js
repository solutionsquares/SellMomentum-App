import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    Image
} from 'react-native'

import { theme } from '../../core/theme'
import Swiper from 'react-native-swiper'
import CustomButton from '../../components/buttonComponents/buttonComponents'
import { ScrollView } from 'react-native-gesture-handler'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const CartComponent = ({ navigation }) => {
    const data = [
        { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/images/test.jpeg') },
        { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/images/test.jpeg') },
    ];
    useEffect(() => {
        getproductDetail()
    }, [])
    const getproductDetail = () => {
        //api call to fetch single product detail
    }
    const followPress = () => {
        //follow button press
    }
    const handleButtonPress = () => {
        console.log('Button pressed!');
        // Handle button press here
    };
  
    return (
        <>
            <ScrollView>
                 
                    {/* <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} /> */}
                    
                       
                    <View style={styles.container}>
                        {/* <View style={theme.padding10}>
                        <Text>address</Text>
                        </View> */}
                        <View style={styles.container1}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../../assets/images/test.jpeg')}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.productName}>Product Name</Text>
                                <Text style={styles.amount}>$10.00</Text>
                                <Text style={styles.quantity}>Quantity: 2</Text>
                            </View>
                        </View>
                    </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        // flex:2
      },
    container1: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      imageContainer: {
        flex: 1,
      },
      image: {
        width: '100%',
        height: '100%',
      },
      detailsContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      amount: {
        fontSize: 14,
        color: 'green',
        marginBottom: 5,
      },
      quantity: {
        fontSize: 14,
      },


})

export default CartComponent
