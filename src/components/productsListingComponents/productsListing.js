
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList

} from 'react-native'
const theme = require('../../core/theme');
const ProductsListingComponents = ({ data }) => {
    return (
        <View >
            <TouchableOpacity onPress={() => gotoProductDetail()}>
                <View style={styles.cardContainer} >
                    <Image source={data?.image} style={styles.image} />
                    <View style={styles.content}>
                        <Text style={theme.productLabelColor}>{data.title}</Text>
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
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 10,
        paddingHorizontal: 10
      },
      SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
      SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
      
      buttonStyle: {
        backgroundColor: '#EEE',
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderWidth: 0.5,
        borderColor: '#F0F0F0',
        borderRadius: 10
      },
      text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
      styleUser:{
        width:150,
        borderBottomWidth: 1,
        borderColor: '#eee',
        with:'100%',
        padding: 1,
        marginTop: 10
      },
      cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        margin:5,
        elevation: 3,
        width:170,
      },
      image: {
        width: '100%',
        height: 150,
        resizeMode:'cover',
        marginTop:0.1,
        borderRadius:15
      },
      content: {
        marginTop: 8,
        padding:10
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 14,
        color: '#888888',
      },
    
      containerCenterd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      leftText: {
        color:'black',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
      },
      rightText: {
        marginLeft: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
      },
      letter: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      viewheight:{
        height:220
      }
    
    

})
export default ProductsListingComponents
