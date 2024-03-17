import React from "react";
import { Alert, Button } from "react-native";   

// Props faz a função ser manipulavel no app.js
function MeuButton(props){
    return(
        <Button
        color= "blue"
        title= {props.titulo}
        onPress={()=> Alert.alert('Aqui eu farei o login')}
        />
    )
}

export default MeuButton;