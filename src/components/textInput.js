import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { theme } from '../core/theme'

export default function Input({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        selectionColor={theme.colors.primary}
        {...props}
        placeholder={props.label}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius:5,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    // paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    // paddingTop: 8,
  },
})