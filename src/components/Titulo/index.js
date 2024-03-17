import React from "react";
import { Text, StyleSheet } from "react-native";


/* primeira forma
class Titulo extends React.Component{
    render(){
        return( 
            <Text style={css.titulo}>Olaaa!!!!</Text>
        );
    }
} */

/*  2 forma usando arrow function ( => ())
const Titulo = () =>(
    <Text style={css.titulo}>Olaaa!!!!</Text>
)
*/
// 3 forma *a melhor*
function Titulo(props) {
    return (
        <Text style={css.titulo}>{props.titulo}</Text>
        
    );
}

const css = StyleSheet.create({
    titulo: {
        
        textAlign: "center",
        color: "blue",
        fontSize: 40,
        marginBottom: 20
    }
})
export default Titulo;

