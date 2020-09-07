import React, {Component} from 'react'
import { StyleSheet, View} from 'react-native'
import Busca from './components/Busca'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Busca></Busca>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  }
})
