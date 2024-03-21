import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";


const SuperBotao = (props) => {
    return (
        <Text
        style={style.superBotao}
        >
            <View style={style.botao}>
                <Text style={style.valor}>{props.valor}</Text>
                
            </View>
        </Text>
    );
}


export default SuperBotao;
const style = StyleSheet.create({
    superBotao: {
        marginLeft: 15,
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