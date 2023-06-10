import React from 'react'
import { StyleSheet, Text } from 'react-native'
const theme = require('../core/theme');

const Header = ({ navigation }) => {
    return <Text style={[styles.header,theme.primaryColor]} />
}
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
export default Header