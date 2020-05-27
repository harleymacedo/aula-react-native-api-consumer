import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textoEntrada: '',
      textoResultado: '',
    }
    this.buscar = this.buscar.bind(this)
    this.atualizarTexto = this.atualizarTexto.bind(this)
  }

  atualizarTexto(event) {
    console.log(event.nativeEvent.text)
    this.setState({textoEntrada: event.nativeEvent.text})
  }

  buscar() {
    let url = 'https://aula-node-api-server.herokuapp.com/api/' + this.state.textoEntrada
    console.log(url)
    fetch(url)
    .then( (resultado) => {
      return resultado.json()
    })
    .then( (resultado) => {
      let textoResult = 'Nome: ' + resultado.nome
      console.log(textoResult)
      this.setState({textoResultado: textoResult})
    })
    .catch( (error) => {
      this.setState({textoResultado: 'Valor não encontrado'})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo1} >Busca rápida de Profs</Text>
        <Text style={styles.titulo1} >Informe o código:</Text>
        <TextInput placeholder='0 - 3' style={styles.entrada1} keyboardType='numeric' onChange={this.atualizarTexto} />
        <TouchableOpacity style={styles.botao1} onPress={this.buscar} ><Text style={styles.textoBotao1} >Buscar</Text></TouchableOpacity>
        <Text style={styles.resultado1} >{this.state.textoResultado}</Text>
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
  },
  titulo1: {
    color: '#FFF',
    fontSize: 22,
    marginTop: 30,
  },
  entrada1: {
    height: 40,
    width: '50%',
    backgroundColor: '#444',
    fontSize: 18,
    marginTop: 30,
    color: '#FFF',
    textAlign: 'center',
  },
  botao1: {
    marginTop: 30,
    width: '50%',
    height: 40,
    backgroundColor: '#44A',
  },
  textoBotao1: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    paddingTop: 4,
  },
  resultado1: {
    color: '#FFF',
    fontSize: 22,
    marginTop: 30,
  },
});
