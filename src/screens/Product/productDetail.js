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
    Image
} from 'react-native'

import Swiper from 'react-native-swiper'
import CustomButton from '../../components/buttonComponents/buttonComponents'
import { ScrollView } from 'react-native-gesture-handler'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const theme = require('../../core/theme');

const ProductDetail = (props) => {
    console.log(props)
    // console.log(productsDetails)
    const navigation = props.navigation
    const [productsDetails, setProductsDeatails] = useState(props.route.params?.productsDetails)
    const data = [
        { id: 1, title: 'Product 1', price: '$10', image: require('../../assets/icons/products1.webp') },
        { id: 2, title: 'Product 2', price: '$20', image: require('../../assets/icons/products2.webp') },
        { id: 3, title: 'Product 3', price: '$30', image: require('../../assets/icons/products3.webp') },
    
    ];
    useEffect(() => {
        // getproductDetail()
        // console.log(props.route.params.productsDetails);
        // setProductsDeatails(props.route.params.productsDetails)
        console.log(productsDetails)
    }, [])
    const getproductDetail = () => {
        //api call to fetch single product detail
    }
    const AddtoWishList = (params)=> {
        navigation.navigate('Wishlist')  
    }
    const followPress = () => {
        //follow button press
    }
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />
                    <Swiper style={[styles.wrapper, { height: 250, position: 'relative' }]}
                        activeDot={
                            <View
                                style={[theme.primaryBGColor,{
                                    width: 13,
                                    height: 13,
                                    borderRadius: 7,
                                    marginLeft: 7,
                                    marginRight: 7
                                }]}
                            />
                        }
                    // paginationStyle={{
                    //     height: '100%',
                    // }}
                    >

                        {data.map((item, key) => {
                            return (
                                <View key={key} style={[item.css]}>
                                    <Image style={styles.image} source={item.image} ></Image>
                                </View>
                            )
                        })}

                    </Swiper>
                    <View style={[styles.wishlistIcon]}> 
                                    <AntDesign name="sharealt" size={27} style={[styles.iconCss,theme.padding5,theme.primaryColor]} />
                                    <AntDesign name="hearto" size={27} style={[styles.iconCss,theme.padding5,theme.primaryColor]} onPress={AddtoWishList} />
                                    <Entypo name="dots-three-vertical" size={27} style={[styles.iconCss, theme.padding5,theme.primaryColor]} />

                                    </View>
                    <View style={[theme.containerCenterdColumn,]}>
                        <View style={theme.padding5 }>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{productsDetails?.name}</Text>
                        </View>
                        <View style={[theme.padding5,{ flexDirection: 'row', }]}>
                            <Text style={[styles.discountedPrice, theme.primaryColor]}>${productsDetails?.price}</Text>
                            <Text style={[styles.originalPrice, styles.originalPriceText]}>$50</Text>
                            <Text style={[styles.originalPriceText]}>50% off</Text>
                        </View>

                    </View>
                    <View style={[theme.containerCenterd,]}>
                        <View style={theme.smallCircle}>
                            <Text style={styles.letter}>T</Text>
                        </View>
                        <Text style={theme.leftText}>Tradly Store </Text>
                        <View style={theme.rightText}>
                            <CustomButton
                                onPress={() => followPress()}
                                title="Follow"
                                width={110}
                                backgroundColor={true}
                                textColor={true}
                            />
                        </View>
                    </View>
                    <View style={[theme.containerCenterd, styles.description]}>

                        <Text >{productsDetails?.description}</Text>

                    </View>
                    <View style={[styles.detailsCard]}>
                        <Text style={styles.detailsTitle}>Details</Text>
                        <View style={styles.detailTable}>
                            <Text style={styles.leftDetail}>Condition</Text>
                            <Text style={styles.rightDetail}>sadas</Text>
                        </View>
                        <View style={styles.detailTable}>
                            <Text style={styles.leftDetail}>Price Type</Text>
                            <Text style={styles.rightDetail}>sadas</Text>
                        </View>
                        <View style={styles.detailTable}>
                            <Text style={styles.leftDetail}>Category</Text>
                            <Text style={styles.rightDetail}>sadas</Text>
                        </View>
                        <View style={styles.detailTable}>
                            <Text style={styles.leftDetail}>Location</Text>
                            <Text style={styles.rightDetail}>sadas</Text>
                        </View>
                    </View>
                    <View style={[styles.detailsCard,]}>
                        <Text style={styles.detailsTitle}>Additional Details</Text>
                        <View style={styles.detailTable}>
                            <Text style={styles.leftDetail}>Delivery Details</Text>
                            <Text style={styles.rightDetail}>Home Delivery Available, Cash On Delivery</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.addcartButton}>
                <CustomButton
                    onPress={() => followPress()}
                    title="Add To Cart"
                    width={'100%'}
                    height={60}
                    backgroundColor={true}
                    textColor={true}
                    fontSize={25}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    wrapper: {
        bottom: 5,
        top: 2

    },
    
    wishlistIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    discountedPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        fontSize: 16,
        marginBottom: 5,
    },
    originalPriceText: {
        marginTop: 5,
        marginLeft: 8,
        fontSize: 16,
    },
    letter: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    image: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
    },
    description: {
        marginTop: 10,
        paddingVertical: 50,
        padding: 30
    },
    addcartButton: {
        marginHorizontal: 20
    },
    detailsTitle: {
        fontSize: 20,
        marginStart: 20
    },
    detailsCard: {
        marginTop: 10,
        paddingVertical: 5,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#ffff'
    },
    detailTable: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    leftDetail: {
        flex: 0.3,
        textAlign: 'left',
        fontSize: 14
    },
    rightDetail: {
        flex: 0.7,
        textAlign: 'left',
        fontSize: 14

    }

})

export default ProductDetail
