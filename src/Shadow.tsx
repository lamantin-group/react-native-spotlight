import React, { PureComponent } from 'react'
import { View, ViewStyle, Dimensions } from 'react-native'
import { Color } from 'csstype'

interface ShadowProps {
  style?: ViewStyle
  opacity?: number
  color?: Color
}

const { width, height } = Dimensions.get('window')

export class Shadow extends PureComponent<ShadowProps> {
  static defaultProps = {
    style: {},
    color: '#000',
    opacity: 0.5,
  }

  render() {
    const { opacity, style, color } = this.props
    return (
      <View
        style={{
          position: 'absolute',
          height: height,
          width: width,
          zIndex: 100,
          ...style,
          backgroundColor: color,
          opacity: opacity,
        }}
      />
    )
  }
}
