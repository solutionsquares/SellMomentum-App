import React, { useState } from 'react'
import { StyleSheet, Text, FlatList,Dimensions,View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const theme = require('../core/theme');
const windowWidth = Dimensions.get('window').width;
const SagmentView = ({ navigation,sagmentData }) => {
  const [sagmentDataNew,setSagmentData] = useState(sagmentData)
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.item,theme.garyBorderColor,{width:(windowWidth/sagmentDataNew.length)-21,backgroundColor:'red'}]}>
        {/* Render your item content */}
        <View style={[theme.rowView,theme.horizontal10Padding,styles.centerBox]}>
        <FontAwesome name={item.icon} size={15} style={[theme.whiteColor,{paddingHorizontal:5}]} /> 
        <Text style={[theme.whiteColor]}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.header,theme.backgroundColor]}>
      <FlatList
        data={sagmentDataNew}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingHorizontal: 20,    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContent: {
    alignItems: 'center',
  },
  item: {
    marginRight: 10,
    borderWidth:1,
    padding:8,
    marginBottom:13,
    borderRadius:25,
    alignItems:"center"
  },
  tagText:{
  },
  centerBox:{
    alignItems:"center"
  }
  
});
export default SagmentView