import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../core/theme';

const CustomButton = ({ title, onPress, width, backgroundColor, textColor }) => {
  const buttonStyles = [
    styles.button,
    { width: width || 150, backgroundColor: backgroundColor ?  theme.colors.primary : theme.colors.white},
  ];
  const textStyles = [styles.text, { color: textColor ? theme.colors.white  :  theme.colors.primary , textAlign:'center' }];
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 25,
    paddingHorizontal: 25
  },
});

export default CustomButton;
