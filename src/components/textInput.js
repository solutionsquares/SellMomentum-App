import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
const theme = require('../core/theme');

export default function Input({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,theme.surfaceBGColor]}
        selectionColor={'#33907C'}
        {...props}
        placeholder={props.label}
      />
      {description && !errorText ? (
        <Text style={[styles.description,theme.secondaryColor]}>{description}</Text>
      ) : null}
      {errorText ? <Text style={[styles.error,theme.errorColor]}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderRadius:5,
  },
  description: {
    fontSize: 13,
    // paddingTop: 8,
  },
  error: {
    fontSize: 13,
    // paddingTop: 8,
  },
})