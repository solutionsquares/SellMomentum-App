import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical:10,
    paddingVertical:5,
    borderRadius: 25,
    backgroundColor:'#33907C',
    paddingHorizontal:25
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
