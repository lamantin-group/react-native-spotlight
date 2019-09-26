import React, { PureComponent } from 'react'
import { View, ViewStyle, Dimensions } from 'react-native'

interface ShadowProps {
  style?: ViewStyle
}

const { width, height } = Dimensions.get('window')

export class Shadow extends PureComponent<ShadowProps> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { style } = this.props
    // textStyles
    return (
      <View
        opacity={0.5}
        style={{
          position: 'absolute',
          height: height,
          width: width,
          backgroundColor: '#000',
          zIndex: 100,
        }}>
        {/* {this.props.children} */}
      </View>
    )
  }
}
