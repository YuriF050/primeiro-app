import React from "react";
import { View, Text, StyleSheet, ImageBackground, } from "react-native";

export default function Home() {
  return (
    <ImageBackground source={require("../../Utils/Images/fundo-musica.jpg")} style={styles.imageBackground} opacity={0.9} >

      <View style={styles.container}>
        <ImageBackground source={require("../../Utils/Images/fundo-branco.jpg")} opacity={0.8} borderRadius={20} >
        <Text style={styles.title}>Bem-vindo ao</Text>
        <Text style={styles.appName}>My Music List</Text>
        <Text style={styles.description}>Descubra uma nova maneira de se conectar com sua música favorita. Com nosso aplicativo, você pode adicionar seus artistas favoritos e suas músicas preferidas, tudo em um só lugar.</Text>
        <Text style={styles.description}>Explore uma vasta biblioteca musical e descubra novos artistas, álbuns e gêneros. Personalize sua experiência musical adicionando suas músicas e artistas favoritos à sua coleção.</Text>
        <Text style={styles.description}>Não importa o seu gosto musical, estamos aqui para ajudá-lo a descobrir, explorar e desfrutar da música que você ama. Faça do My Music List sua casa musical hoje mesmo!</Text>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginLeft: 110 ,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appName: {
    marginLeft: 90 ,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff6f61',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20 ,
    marginRight: 20 ,
  },
  imageBackground: {

    flex: 1,
    width: '100%',
    height: '100%',
  }
});
