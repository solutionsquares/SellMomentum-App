import React from 'react';
import { View, Text, FlatList, Image,  StyleSheet,
} from 'react-native';
const theme = require('../../core/theme');

const OrderHistoryScreen = () => {
    const orderHistoryData = [
        {
            id: 1,
            orderNumber: 'ORD-001',
            product: {
                name: 'Product 1',
                price: '$50',
                image: require('../../assets/images/test.jpeg'),
            },
            status: 'Delivered',
        },
        {
            id: 2,
            orderNumber: 'ORD-002',
            product: {
                name: 'Product 2',
                price: '$30',
                image: require('../../assets/images/test.jpeg'),
            },
            status: 'Pending',
        },
        {
            id: 3,
            orderNumber: 'ORD-003',
            product: {
                name: 'Product 3',
                price: '$80',
                image: require('../../assets/images/test.jpeg'),
            },
            status: 'Cancelled',
        },
        // Add more order history data here
    ];
    const renderOrderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'row', marginBottom:10, marginTop:5, padding:10, backgroundColor:'#fff'}}>
            <View style={{ padding: 10, flex: 0.2, flexDirection: 'row', alignItems: 'center', }}>
                <Image source={item.product.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            </View>
            <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.product.name}</Text>
                <Text>Price: {item.product.price}</Text>
            </View>
            <View style={{ flex: 0.4, justifyContent: "center" }}>
                <View style={styles.statusCircle}>
                    <Text style={[styles.statusText,{borderWidth:1, padding:5,borderRadius:20,borderColor:'green'}]}>{item.status}</Text>
                </View>                
            </View>
        </View>
    );

    return (
        <View style={[theme.pagesBGColor,{ flex: 1, }]}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,padding: 20 }}>Transactions</Text>
            <FlatList
                data={orderHistoryData}
                renderItem={renderOrderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    orderItemContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    orderItemDetails: {
      flex: 1,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    statusCircle: {
    //   backgroundColor: 'green',

    //   borderRadius: 15,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   marginTop: 5,
    },
    statusText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign:"center"
    },
  });

export default OrderHistoryScreen;
