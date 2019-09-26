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
import { View, Alert, NativeModules, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { Spotlight, Shadow, Button, MyLibrary } from 'react-native-library'
import { Measurable, ArrowView } from 'react-native-arrow-view'
const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
})
const { NativeLibrary } = NativeModules

export default class App extends Component {
  componentDidMount() {
    console.log(NativeModules)
    console.log(NativeLibrary)
  }

  state = {
    spotlight: {
      x: 0,
      y: 0,
    },
    text: {
      x: 0,
      y: 0,
    },
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <Shadow />

        <StatusBar barStyle="dark-content" />
        <Text style={styles.h1}>react-native-library bootstrap</Text>

        <Spotlight>
          <Measurable
            onMeasure={(x: number, y: number, width: number, height: number) => {
              this.setState({
                text: { x: x + width / 3, y: y + height + 5 },
              })
            }}>
            <Text style={{ color: '#fff' }}>Press on the button</Text>
          </Measurable>
        </Spotlight>

        <Spotlight enabled={true}>
          <Measurable
            onMeasure={(x: number, y: number, width: number, height: number) => {
              this.setState({
                spotlight: { x: x + width / 2, y: y - 15 },
              })
            }}>
            <Button
              text="Test JS"
              onPress={() => {
                MyLibrary.showMessage('This text passed from app to library')
              }}
            />
          </Measurable>
        </Spotlight>

        <ArrowView
          color={'#fff'}
          dash={[3, 5]}
          curveDelta={10}
          from={this.state.text}
          to={this.state.spotlight || { x: 0, y: 0 }}
        />

        <Button
          text="Test Native getValue()"
          onPress={async () => {
            const result = await MyLibrary.getValue()
            Alert.alert('Test Native getValue()', result)
          }}
        />
      </View>
    )
  }
}
