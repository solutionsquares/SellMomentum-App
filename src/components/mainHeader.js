import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Badge from '@nghinv/react-native-badge';
const global = require('../core/theme');
const MainHeader = ({ title }) => {
  
  const { navigate } = this.props?.navigation ?  this.props?.navigation:"";

  const gotoCart = (params)=> {
    navigation.navigate('CartComponents')  
}
  return (
    <View style={styles.headerBox}>
      <Text style={[styles.header,global.primaryBGColor,global.whiteColor]} >{title}</Text>
      <View style={[styles.header, styles.textAlignCss,global.primaryBGColor,]}>
        <View style={[styles.headerBox]}>
          <AntDesign name="heart" size={20} style={[styles.iconCss,global.whiteColor]}/>
            <View>
            <Badge
              containerStyle={styles.badgeCss}
              size={13}
              labelFormatterLimit={2}
              style={[global.errorBGColor]}
            />
            <Entypo name="shopping-cart" size={20} style={[styles.iconCss,global.whiteColor]} 
             onPress={() => navigate('CartComponents')}
             />
            </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
    padding: 20,
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  headerBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textAlignCss: {
    textAlign: 'right'
  },
  iconCss: {
    paddingLeft: 20,
  },
  badgeCss:{
    position:"absolute",
    zIndex:1,
    right:-5,
    marginTop:-5
  }
 
})
export default MainHeader