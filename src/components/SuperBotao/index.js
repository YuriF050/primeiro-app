import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";

const SuperBotao = (props) => {
    return (
        <TouchableHighlight style={style.superBotao}
            onPress={() => Alert.alert(props.alerta)}
        >
            <View style={style.botao}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>
        </TouchableHighlight>
    );
}

export default SuperBotao
const style = StyleSheet.create({
    superBotao: {

    },
    botao: {
        marginLeft: 15,
        alignItems: 'center',
        backgroundColor: "blue",
        padding: 12,
        width: 300,
        borderRadius: 30

    },
    valor: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold'
    }
})