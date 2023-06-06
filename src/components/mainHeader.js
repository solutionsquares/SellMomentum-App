import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../core/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Badge from '@nghinv/react-native-badge';
const MainHeader = ({ title }) => {
  
  const { navigate } = this.props?.navigation ?  this.props?.navigation:"";

  const gotoCart = (params)=> {
    navigation.navigate('CartComponents')  
}
  return (
    <View style={styles.headerBox}>
      <Text style={[styles.header]} >{title}</Text>
      <View style={[styles.header, styles.textAlignCss]}>
        <View style={[styles.headerBox]}>
          <AntDesign name="heart" size={20} style={[styles.iconCss]} color={theme.colors.white} />
            <View>
            <Badge
              backgroundColor={theme.colors.error}
              containerStyle={styles.badgeCss}
              size={13}
              labelFormatterLimit={2}
            />
            <Entypo name="shopping-cart" size={20} style={[styles.iconCss]} color={theme.colors.white} 
             onPress={() => navigate('CartComponents')}
             />
            </View>
        </View>
        {/* <AntDesign name="shopping-cart" size={20} color={theme.colors.primary} style={{ marginRight: 10 }}/> */}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    fontSize: 21,
    color: theme.colors.white,
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