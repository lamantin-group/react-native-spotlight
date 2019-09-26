import React, { PureComponent } from 'react'
import { View, ViewStyle } from 'react-native'

interface SpotlightProps {
  enabled: boolean
}

export class Spotlight extends PureComponent<SpotlightProps> {
  static defaultProps = {
    enabled: true,
  }

  render() {
    const { enabled } = this.props
    const style: ViewStyle = {}
    if (enabled) {
      style.zIndex = 99999
    }
    return <View style={style}>{this.props.children}</View>
  }
}
