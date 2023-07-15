
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
const CategoryComponent = ({data,navigation}) => {
  console.log(navigation)


const handleCategoryPress = (data) => {
  console.log('Button pressed!',data);
  navigation.navigate('CategoryWiseProducts',{categoryDetails:data})

};
      
  const renderCategoryItem = ({ item }) => (
    <View style={{padding:2}}>
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => handleCategoryPress(item)}
    >
      <Image source={item?.image ? item?.image : require('../../assets/images/test.jpeg')} style={styles.image} />
      <Text style={styles.category}>{item.name}</Text>
    </TouchableOpacity>
    </View>
  );

    return (
        <View >
        <FlatList
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item?.id}
          numColumns={4}
          horizontal={false}
          
        />
      </View>
    )
    
}
const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center',
        // backgroundColor:'#ccc',
        width:90
      },
      image: {
        width: 90,
        height: 90,
  
      },
      category: {
        position:'absolute',
        color:'#fff',
        top:29,
        textAlignVertical:'center'
      },
    
  })
export default CategoryComponent
