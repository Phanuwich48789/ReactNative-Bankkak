import { Text, View } from "react-native";
export default function Greeting(props:any){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello, อาโลลลล{props.name}!</Text>
      </View>
    );
}
