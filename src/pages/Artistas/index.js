import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground} from "react-native";


 export default function Artistas() {
    return (
      <ImageBackground source={require("../../Utils/Images/fundo-musica.jpg")} style={styles.imageBackground} opacity={0.9} >
      <View style={styles.container}>
      <Text style={styles.h1}>My Artists</Text>
        <View style={styles.row}>
          <Image source={require('../../Utils/Images/imagens-lista/coshunie.jpeg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/polyphia.jpg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/LiSA.jpeg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../../Utils/Images/imagens-lista/inaba.jpeg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/snailhouse.jpg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/bandmaid.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../../Utils/Images/imagens-lista/macdemarcos.jpeg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/myth.jpg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/mitski.jpeg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../../Utils/Images/imagens-lista/Aoba.jpg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/sawano.jpg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/zutomayo.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../../Utils/Images/imagens-lista/shishamo.jpg')} style={styles.image} />
          <Image source={require('../../Utils/Images/imagens-lista/yorushika.jpg')} style={styles.image} />
        </View>
        
      </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    imageBackground: {
      flex: 1,
      width: '100%',
      height: '100%',},

    h1:{
        textAlign: "center",
        fontSize: 40,
        color: "black"
      }
  });