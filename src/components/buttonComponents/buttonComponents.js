import { height, width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const theme = require('../../core/theme');

const CustomButton = ({ title, onPress, width,height, backgroundColor, textColor ,fontSize}) => {
  const buttonStyles = [
    styles.button,
    { width: width || 150, height : height},
  ];
  const textStyles = [styles.text, {textAlign:'center',fontSize:fontSize }];
  return (
    <TouchableOpacity style={[buttonStyles,backgroundColor ?  theme.primaryBGColor : theme.whiteBGColor]} onPress={onPress}>
      <Text style={[textStyles,textColor ? theme.whiteColor  :  theme.primaryColor ,]}>{title}</Text>
    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 25,
    paddingHorizontal: 25,
    justifyContent:'center'
  },
});

export default CustomButton;
