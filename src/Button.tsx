import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'

export class Button extends PureComponent<{
  text: string
  onPress: () => void
}> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: '#e4e4e4',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 4,
          ...this.props.style,
        }}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
