import react from "react";
import { View,Text, Stylesheet,Button,TouchableOpacity } from "react-native-web";

const ButtonScreen = () => {
    let counter , counterT = 0;
    return(
        <View>
            <Text>Button click</Text>
            <Button
            title="Click me"
            color="blue"
            onPress={()=> console.log("button clicked", counter++)}/>


            <TouchableOpacity
            onPress={()=> console.log("TouchableOpacity clicked", counterT++)}>
        <Text>click TouchableOpacity</Text>
        </TouchableOpacity>
        </View>
    );
}



export default ButtonScreen;