import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../components/buttonComponents/buttonComponents';
import { useState } from 'react';
import Input from '../../components/textInput'

const theme = require('../../core/theme');

const StoreScreen = () => {
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


    const handleButtonPress = () => {
        console.log('Button pressed!');
        setStoreForm(!storeForm)
    };
    const handleButton1Press = () => {
        console.log('Button 1 pressed');
        // Perform any actions or function calls here
      };
    
      const handleButton2Press = () => {
        console.log('Button 2 pressed');
        // Perform any actions or function calls here
      };
    
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
            )}
            {storeForm ? (

                <View style={[theme.alignItemCenter]}>
                    <CustomButton
                        onPress={handleButtonPress}
                        title="Create Store"
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
