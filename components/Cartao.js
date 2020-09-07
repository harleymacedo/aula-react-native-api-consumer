import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Cartao extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>Nome: {this.props.nome}</Text>
                <Text>Área: {this.props.area}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: 'green',
        marginTop: 20,
        height: 40,
        width: 200,
        alignItems: 'center',
        borderRadius: 5,
    }
})

export default Cartao