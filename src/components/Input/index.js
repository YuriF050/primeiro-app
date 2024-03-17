import { SafeAreaView, Text, TextInput, StyleSheet} from "react-native";    
function MeuInput(props){
    return(
        <SafeAreaView>
            <Text style={style.label}>
               {props.label}
            </Text>

            <TextInput 
            style={style.input}
            placeholder={props.placeholder}>
            </TextInput>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    input: {
        backgroundColor: "white",
        opacity:  0.6,
        borderWidth: 1,
        height: 42,
        marginBottom: 15,
        marginTop: 3,
        marginLeft: 15,
        marginRight: 15,
        padding: 12,
        width: 300,
        borderRadius:20,
        borderStyle: 'dashed',
        borderColor: "black",
        

    },
    label:  {
        color: "black",
        marginLeft: 15,
        fontSize: 20,
        
    }
})
export default MeuInput;