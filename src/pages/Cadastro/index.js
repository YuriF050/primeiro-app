import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Alert } from "react-native";

import MeuInput from '../../components/Input';
import Titulo from "../../components/Titulo";
import SuperBotao from "../../components/SuperBotao";
import Senha from "../../components/Input/Senha";

const Cadastro = ({navigation}) => {
    return (
        <ImageBackground source={require("../../Utils/Images/fundo-musica.jpg")} style={styles.imageBackground} opacity={0.9} >
        <View style={styles.container}>
            <ImageBackground source={require("../../Utils/Images/fundo-branco.jpg")} opacity={0.5} borderRadius={20} >
            <Titulo titulo="Cadastro" />

            <MeuInput
                label="Nome"
                placeholder="ex: Jorge" />

            <MeuInput
                label="Sobrenome"
                placeholder="ex: Ferreira" />
            <MeuInput
                label="E-mail"
                placeholder="exemplo@exemplo.com" />
            <Senha
                label="Senha"
                placeholder="ex:1234abc" />
            <Senha
                label="Confirme a senha"
                placeholder="ex:1234abc" />

             <TouchableOpacity onPress={() => Alert.alert("Conta criada com sucesso!")}>    
            <SuperBotao
                valor="Criar Conta"  />
            </TouchableOpacity>            
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.cadastro}>
                   Já tem uma conta? Faça o login agora!
                </Text></TouchableOpacity>
                </ImageBackground>
        </View></ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#000cbc",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cadastro: {
      color: "#000cbc",
      marginTop: 2,
      textAlign: "center",
      marginBottom: 10,
      fontSize: 14,
    }, 
    imageBackground: {
      flex: 1,
      width: '100%',
      height: '100%',}
});

export default Cadastro;