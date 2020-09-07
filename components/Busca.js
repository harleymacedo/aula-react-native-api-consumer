import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import Cartao from './Cartao'

class Busca extends Component {

    constructor(props) {
        super(props)
        this.state = {
          textoEntrada: '',
          dados: [],
        }
        this.buscar = this.buscar.bind(this)
        this.atualizarTexto = this.atualizarTexto.bind(this)
      }
    
      atualizarTexto(event) {
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
          this.setState({dados: resultado})
        })
        .catch( (error) => {
          this.setState({textoResultado: 'Valor não encontrado'})
        })
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo1} >Busca rápida de Professores</Text>
                <Text style={styles.titulo1} >Informe o termo:</Text>
                <TextInput placeholder='Termo' style={styles.entrada1} onChange={this.atualizarTexto} />
                <TouchableOpacity style={styles.botao1} onPress={this.buscar} ><Text style={styles.textoBotao1} >Buscar</Text></TouchableOpacity>
                <View>
                    {
                        this.state.dados.map( (item, i) => {
                            return ( <Cartao nome={item.nome} area={item.area} key={i} /> )
                        })
                    }
                </View>
                
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
      width: 150,
      backgroundColor: '#444',
      fontSize: 18,
      marginTop: 30,
      color: '#FFF',
      textAlign: 'center',
    },
    botao1: {
      marginTop: 30,
      width: 100,
      borderRadius: 3,
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
      fontSize: 20,
      marginTop: 30,
    },
    resultado2: {
      color: '#FFF',
      fontSize: 20,
      marginTop: 10,
    },
  });

export default Busca