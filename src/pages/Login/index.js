import  * as React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ImageBackground} from 'react-native';

import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperBotao from '../../components/SuperBotao';
import Senha from '../../components/Input/Senha';



export default function Login({navigation}){

  return(
    <ImageBackground source={require("../../Utils/Images/fundo-musica.jpg")} style={styles.imageBackground} opacity={0.9} >
  <View style={styles.container}>
    <ImageBackground source={require("../../Utils/Images/fundo-branco.jpg")} opacity={0.5} borderRadius={20} >

    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Titulo titulo="My Music List"/>
    </TouchableOpacity>
        
    <MeuInput
      label="E-mail"
      placeholder="exemplo@exemplo.com"
      />

    <Senha
      label="Senha"
      placeholder="ex:1234abc" />


    <TouchableOpacity onPress={() => Alert.alert("Aqui você poderá trocar sua senha")}>
      <Text style={styles.link}>
        Esqueceu sua senha?
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("StackRoutes")}> 
    <SuperBotao
      valor="Entrar" >
      </SuperBotao>
    </TouchableOpacity>
   

    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
      <Text style={styles.cadastro}>
        Não tem uma conta? Crie uma agora!
      </Text>
    </TouchableOpacity>

    </ImageBackground>

  </View>
  </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  link: {
    textAlign: "center",
    color: "#000cbc",
    fontSize: 14,
    marginTop: -10,
    marginBottom: 15,
    paddingTop: -30,
    marginLeft: 150
  },
  cadastro: {
    textAlign: "center",
    color: "#000cbc",
    marginTop: 2,
    marginBottom: 10,
    fontSize:16
    
  }, 
  imageBackground: {
    
    flex: 1,
    width: '100%',
    height: '100%',}


});
