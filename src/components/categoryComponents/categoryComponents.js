
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
const CategoryComponent = ({data}) => {

console.log(data)
const handleCategoryPress = () => {
  console.log('Button pressed!');
};
      
  const renderCategoryItem = ({ item }) => (
    <View style={{padding:2}}>
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => handleCategoryPress(item.id)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.category}>{item.category}</Text>
    </TouchableOpacity>
    </View>
  );

    return (
        <View >
        <FlatList
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
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
