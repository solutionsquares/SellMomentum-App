import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions,StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import Swiper from 'react-native-swiper'
const theme = require('../../core/theme');
const IntroScreen = ({ navigation }) => {
    const [isLandscape, setIsLandscape] = useState(false);
    const user = useSelector(state => state?.user?.entities?.undefined)
    useEffect(()=>{
        console.log("user",user)
        if(user){
            if(user?.token){
                navigation.replace('HomeBase', { screen: 'Home' })
            }else{
                navigation.replace('WithoutAuth', { screen: 'Login' })
            }
        }
    },[])
    useEffect(() => {
        const updateOrientation = () => {
            const { width, height } = Dimensions.get('window');
            setIsLandscape(width > height);
        };
        Dimensions.addEventListener('change', updateOrientation);
        
        return () => {
            Dimensions?.removeEventListener('change', updateOrientation);
        };
    }, []);
   

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />
            <View style={[styles.topHalf,theme.primaryBGColor]} />
            <View style={[styles.bottomHalf,theme.whiteBGColor]} />
            <View style={[styles.overlay, theme.whiteBGColor,isLandscape && styles.landscapeOverlay]}>
                <Swiper style={styles.wrapper} >
                    <View style={[styles.slider, styles.overlayContent]}>
                        <Image source={require('../../assets/icons/Group6.png')} />
                        <Text style={[styles.description,theme.primaryColor]}>Empowering Artisans, Farmers & Micro Business</Text>
                    </View>
                    <View style={[styles.slider, styles.overlayContent]}>
                        <Image source={require('../../assets/icons/Group6.png')} />
                        <Text style={[styles.description,theme.primaryColor]}>Empowering Artisans, Farmers & Micro Business</Text>

                    </View>
                    <View style={[styles.slider, styles.overlayContent]}>
                        <Image source={require('../../assets/icons/Group6.png')} />
                        <Text style={[styles.description,theme.primaryColor]}>Empowering Artisans, Farmers & Micro Business</Text>
                    </View>
                </Swiper>
                <TouchableOpacity style={[styles.nextButton,theme.primaryBGColor]} onPress={()=>navigation.replace('WithoutAuth', { screen: 'Login' })}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topHalf: {
        flex: 1,
        // backgroundColor: theme.colors.primary, // Replace with your desired color
    },
    bottomHalf: {
        flex: 1,
        // backgroundColor: theme.colors.white, // Replace with your desired color
    },
    overlay: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: '25%',
        width: '85%',
        height: '65%',
        // backgroundColor: theme.colors.white,
        borderRadius: 8
    },
    landscapeOverlay: {
        top: 0,
        height: '100%',
    },
    overlayContent: {
        alignItems: 'center',

    },
    description: {
        // color: theme.colors.primary,
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Montserrat',
        fontSize: 20,
        alignItems:"flex-end"
    },
    nextButton: {
        // backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    imageCss: {
        width: 50,
        height: 150
    },
    slider:{
        padding:15
    }
});


export default IntroScreen
