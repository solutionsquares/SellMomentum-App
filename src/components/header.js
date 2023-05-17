import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '../core/theme'

const Header = ({ navigation }) => {
    return <Text style={styles.header} />
}
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
export default Header