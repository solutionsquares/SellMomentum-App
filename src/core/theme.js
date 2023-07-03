
const React = require('react-native');

const { StyleSheet } = React;
const primary = '#33907C';
const secondary = '#414757';
const surface = '#ebf0fc';
const gray = '#ccc';
const naturalBlack = '#4F4F4F';
const white = "#FFFFFF";
const error = '#f13a59'
const lightShadeofblue ="F6F9FF"

module.exports = StyleSheet.create({
  //colors
  primaryColor: {
    color: primary
  },
  primaryBGColor: {
    backgroundColor: primary
  },
  secondaryColor: {
    color: secondary
  },
  secondaryBGColor: {
    backgroundColor: secondary
  },
  whiteColor: {
    color: white
  },
  whiteBGColor: {
    backgroundColor: white
  },
  whiteBorderBottomColor: {
    borderBottomColor: white,
  },
  errorColor: {
    color: error
  },
  pagesBGColor:{
    backgroundColor:lightShadeofblue
  },
  errorBGColor: {
    backgroundColor: error
  },
  garyColor: {
    color: gray
  },
  grayBGColor: {
    backgroundColor: gray
  },
  garyBorderColor: {
    borderColor: gray
  },
  surfaceColor: {
    color: surface
  }, surfaceBGColor: {
    backgroundColor: surface
  },
  container: {
    flex: 1,
    backgroundColor: '#33907C',
    justifyContent: 'center',
    padding: 20
  },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
  whiteTitle: {
    color: "#ffffff",
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  whiteText: {
    color: "#ffffff",
    fontSize: 16,
    alignItems: "center"
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: "#ebf0fc",
    borderRadius: 25,
    color: white,
    marginBottom: 20,
    padding: 10,
  },
  inputDark: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
    color: "#000",
    marginBottom: 20,
    padding: 10,
  },
  inputDarkSquare: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: "#DBDBDE",
    borderRadius: 5,
    color: "#000",
    marginBottom: 20,
    padding: 10,
  },
  centerCss: {
    alignItems: "center",
    justifyContent: "center",
  },
  alignItemCenter: {
    alignItems: "center",
  },
  rowView: {
    flexDirection: "row"
  },
  flexRight: {
    justifyContent: "flex-end"
  },
  flexLeft: {
    justifyContent: "flex-start"
  },
  vertical10Padding: {
    paddingVertical: 10
  },
  horizontal10Padding: {
    paddingHorizontal: 10,
  },
  smallCircle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#33907C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCircle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#33907C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#33907C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSize20: {
    fontSize: 20
  },
  fontBold:{
    fontWeight:'bold'
  },
  whiteColor: {
    color: white
  },
  // Margin 
  marginLeft30: {
    marginLeft: 30
  },
  marginLeft10: {
    marginLeft: 10
  },
  marginRight30: {
    marginRight: 30
  },
  marginTop20: {
    marginTop: 20
  },
  marginTop60M: {
    marginTop: -60
  },
  margin40M: {
    margin: -40,
  },
  // Padding 
  padding5: {
    padding: 5
  },
  padding20:{
    padding:20
  },
  padding10: {
    padding: 10
  },
  paddingTop5:{
    paddingTop:5
  },
  paddingTop10: {
    paddingTop: 10
  },
  paddingHorizontal20: {
    paddingHorizontal: 20
  },
  paddingTop20: {
    paddingTop: 20
  },
  productLabelColor: {
    color: '#333'
  },

  //card
  containerCenterd: {
    paddingVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  containerCenterdColumn: {
    paddingVertical: 5,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffff',
    marginBottom: 5
  },
  leftText: {
    color: 'black',
    marginStart: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightText: {
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fontSize20: {
    fontSize: 20
  },
  borderWidthCss: {
    borderWidth: 1
  },
  borderColorWhite: {
    borderColor: white
  },
  productFont: {
    color: '#4F4F4F',
    fontSize: 14,
    opacity: 0.5
  },


})