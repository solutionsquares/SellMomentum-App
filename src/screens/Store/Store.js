import React from 'react';
import {
    View, Text, StyleSheet, Image, FlatList,TouchableOpacity,Alert
} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import CustomButton from '../../components/buttonComponents/buttonComponents';
import { useState } from 'react';
import Input from '../../components/textInput'
import SearchInput from '../../components/searchInput';
import { useEffect } from 'react';
import { fetchCategories } from '../../stores/product&Category.reducer'
import { fetchSellerProduct } from '../../stores/sellerProducts.reducer';
import { useDispatch, useSelector } from 'react-redux'
import { err } from 'react-native-svg/lib/typescript/xml';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ADD_PRODUCT_IMAGES } from '../../utils/svg';
import { deleteProduct } from '../../api/productApi'
import { constant } from '../../constant/constant';
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose } from '../../utils/notification'



const theme = require('../../core/theme');

const StoreScreen = ({navigation}) => {
    const user = useSelector(state => state?.user?.entities?.undefined)
    const dispatch = useDispatch()


    const [storeIsAvailable, setStoreIsAvailable] = useState(true)
    const [storeForm, setStoreForm] = useState(false);
    const [storeName, setStoreName] = useState('');
    const [storeAddress, setStoreAddress] = useState('');
    const [storeDescription, setStoreDescription] = useState('');
    const [storeType, setStoreType] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [sellerProductsList, setSellerProductsList] = useState()

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        console.log(user.user._id, "SellerID")
        let obj = { userToken: user.token, sellerId: user.user._id }
        await dispatch(fetchSellerProduct(obj)).then(async (res) => {
            if (res) {
                console.log("res", res)
                if (res.payload.status == 200) {
                    const topProduct = res.payload.data.slice(0, 1);
                    setSellerProductsList(topProduct)
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleButtonPress = () => {
        console.log('Button pressed!');
        setStoreForm(!storeForm)
        console.log(storeForm)
    };
    const handleButton1Press = () => {
        console.log('Button 1 pressed');

        // Perform any actions or function calls here
    };

    const handleButton2Press = () => {
        console.log('Button 2 pressed');
        // Perform any actions or function calls here
    };
    const editProducts = (item) => {
        console.log('Button 1 pressed',item);
        navigation.navigate('AddProduct',{productsDetails:item,isUpdate:true}) 

        // Perform any actions or function calls here
    };
    const deleteProducts = (item) => {
        console.log('Button 2 pressed',user.token);
        deleteProduct(item._id,user.token).then(async (res) => {
            if (res) {
              console.log("res", res.status)
              if(res.status === 200){
                console.log("True")
                ToastMsg(constant.errorActionTypes.success, 'Success', 'Your Product SuccessFully Deleted')
                getProducts()

              }else if(res.status === 400){
                ToastMsg(constant.errorActionTypes.error, 'DANGER', res.message)
                if(res.message === "jwt expired"){
                }
    
              }
              try {
              } catch (error) {
                console.log("error", error)
              }
    
              // setApiLoader(false)
            } else {
              // setApiLoader(false)
            }
    
          })

    };
    
    
    const removeProduct = (item) => {
        Alert.alert('Product Remove', 'Are you sure you want to Delete this Product', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'CANCEL',
            },
            {text: 'DELETE', onPress: () => deleteProducts(item)},
          ])

        // Perform any actions or function calls here
    };

    const gotoProductDetail = (params) => {
        console.log(params)
        navigation.navigate('ProductDetail',{productsDetails:params})
    
      }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => gotoProductDetail(item)}>

    <View style={{ width: 200, backgroundColor: '#fff' }}>
            <View style={{position:"relative"}}>
                <Image source={require('../../assets/images/gs3.png')} style={[theme.image]} />
                <View style={[{ flexDirection: 'row',position:'absolute',alignSelf:'center',paddingTop:'50%'}]}>
                    <TouchableOpacity style={{ paddingEnd: 20 }} onPress={()=>editProducts(item)} >
                        <AntDesign name="edit" size={25} color="#FFF"  />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingStart: 20 }} onPress={()=>removeProduct(item)}  >
                        <AntDesign name="delete" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{  }}>
                <View style={[theme.content]}>
                    <Text style={theme.productLabelColor}>{item.name}</Text>
                </View>
            </View>
            <View style={{}}>
                <View style={[]}>
                    <View style={[theme.containerCenterd]}>
                        <View style={[theme.leftText]}>
                            <View style={theme.smallCircle}>
                                <Text style={styles.letter}>T</Text>
                            </View>
                        </View>
                        <View style={[theme.leftText]}>
                            <Text style={{ color: 'green' }}>Tradly</Text>
                        </View>
                        <View style={[theme.rightText,{marginEnd:10}]}>
                            <Text>${item.price}</Text>
                        </View>
                    </View>
                </View>
            </View>           
        </View>
        </TouchableOpacity>
);

    return (
        <View style={styles.container}>
            {!storeIsAvailable ? (
                <ScrollView>
                    <View style={[theme.paddingTop20,]}>
                        <View style={theme.alignItemCenter}>
                            <Image source={require('../../assets/images/storescreen.png')}
                                style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                        </View>
                        {!storeForm ? (
                            <View>
                                <View style={[theme.paddingTop10, theme.alignItemCenter]}>
                                    <Text style={{ textAlign: 'center' }}>You Dont have a store</Text>
                                </View>

                                <View style={[theme.paddingTop20, theme.alignItemCenter]}>
                                    <CustomButton
                                        onPress={handleButtonPress}
                                        title="Create Store"
                                        width={180}
                                        backgroundColor={true}
                                        textColor={true} />
                                </View>
                            </View>
                        ) : null}
                    </View>
                    {storeForm ? (

                        <View style={theme.paddingTop20}>
                            <Text style={[theme.productFont, theme.marginLeft10]}>Store Name</Text>
                            <Input
                                label="Store Name"
                                returnKeyType="next"
                                value={storeName}
                                onChangeText={(text) => setStoreName(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>Store Web Address</Text>
                            <Input
                                label="Store Web Address"
                                returnKeyType="next"
                                value={storeAddress}
                                onChangeText={(text) => setStoreAddress(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>Store Description</Text>
                            <Input
                                label="Store Description"
                                returnKeyType="next"
                                value={storeDescription}
                                onChangeText={(text) => setStoreDescription(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>Store Type</Text>
                            <Input
                                label="Store Type"
                                returnKeyType="next"
                                value={storeType}
                                onChangeText={(text) => setStoreType(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>Address</Text>
                            <Input
                                label="Address"
                                returnKeyType="next"
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>City</Text>
                            <Input
                                label="City"
                                returnKeyType="next"
                                value={city}
                                onChangeText={(text) => setCity(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>State</Text>
                            <Input
                                label="State"
                                returnKeyType="next"
                                value={state}
                                onChangeText={(text) => setState(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>Country</Text>
                            <Input
                                label="Country"
                                returnKeyType="next"
                                value={country}
                                onChangeText={(text) => setCountry(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />
                            <Text style={[theme.productFont, theme.marginLeft10]}>Tag Line</Text>
                            <Input
                                label="Tag Line"
                                returnKeyType="next"
                                value={city}
                                onChangeText={(text) => setCity(text)}
                                //   errorText={error}
                                autoCapitalize="none"
                                autoCompleteType="text"
                                textContentType="text"
                                keyboardType={'text'}
                                maxLength={100}
                                placeholderTextColor={theme.secondaryColor.color}
                                selectionColor={theme.secondaryColor.color}
                                style={theme.inputDarkSquare}
                            />

                        </View>
                    ) : null}
                </ScrollView>
            ) : (
                <View>
                    <View style={[theme.alignItemCenter, theme.paddingTop20, { height: 250, backgroundColor: '#fff' }]}>
                        <View style={[theme.largeCircle, theme.borderWidthCss, , theme.borderColorWhite,]}>
                            <Text style={[theme.whiteColor, theme.fontSize20, theme.alignItemCenter, theme.fontBold]}>T</Text>
                        </View>
                        <Text style={[theme.paddingTop10]}>Tradely Store</Text>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                onPress={handleButton1Press}
                                title="Edit Store"
                                width={150}
                                backgroundColor={false}
                                textColor={false}
                            />
                            <CustomButton
                                onPress={handleButton2Press}
                                title="View Store"
                                width={150}
                                backgroundColor={true}
                                textColor={true} />
                        </View>
                    </View>
                    <View>
                        <SearchInput bgColor={false} />
                    </View>
                    <View>
                        <Text style={styles.leftText}>Products</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FlatList
                                data={sellerProductsList}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                horizontal
                            />
                            <TouchableOpacity onPress={() => chooseFile()}>
                                <ADD_PRODUCT_IMAGES />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            )}
            {storeForm ? (
                <View style={[theme.alignItemCenter]}>
                    <CustomButton
                        onPress={handleButtonPress}
                        title="Add Store"
                        width={180}
                        backgroundColor={true}
                        textColor={true} />
                </View>
            ) : null}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    nextButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StoreScreen;
