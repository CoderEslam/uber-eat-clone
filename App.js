import {View, Text, SafeAreaView} from "react-native";
import Home from "./screens/Home";
import HeaderTabs from "./components/HeaderTabs";

export default function App() {
    return (
        <View style={{marginTop:30}}>
            <HeaderTabs/>
        </View>
    );
}

