/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Shadow, Spotlight } from 'react-native-library'

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
          backgroundColor: 'gray',
        }}>
        {/** Put it for enable shadow background  */}
        <Shadow
          color="#000" // optional: color of shadow
          opacity={0.5} // optional: shadow opacity (0 - transparent, 1 - full colored)
        />

        {/* Wrap needed component in Spotlight */}
        <Spotlight>
          <Text style={{ color: '#fff' }}>I am highlighted :)</Text>
        </Spotlight>

        {/* Can be wrapped complicated custom components too */}
        <Spotlight>
          <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 4 }}>
            <Text>I am highlighted too :)</Text>
          </View>
        </Spotlight>

        <Text style={{ color: '#fff' }}>I am not highlighted :(</Text>
      </View>
    )
  }
}
