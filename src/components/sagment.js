import React, { useState } from 'react'
import { StyleSheet, Text, FlatList,Dimensions,View } from 'react-native'
import { theme } from '../core/theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const windowWidth = Dimensions.get('window').width;
const SagmentView = ({ navigation,sagmentData }) => {
  const [sagmentDataNew,setSagmentData] = useState(sagmentData)
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.item,{width:(windowWidth/sagmentDataNew.length)-21}]}>
        {/* Render your item content */}
        <View style={[theme.rowView,theme.horizontal10Padding,styles.centerBox]}>
        <FontAwesome name={item.icon} color={theme.colors.white} size={15} style={{paddingHorizontal:5}} /> 
        <Text style={styles.tagText}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.header}>
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
    backgroundColor: theme.colors.primary,
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
    borderColor:theme.colors.gray,
    padding:8,
    marginBottom:13,
    borderRadius:25,
    alignItems:"center"
  },
  tagText:{
    color:theme.colors.white
  },
  centerBox:{
    alignItems:"center"
  }
  
});
export default SagmentView