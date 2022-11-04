import {View, Text, SafeAreaView} from "react-native";
import Home from "./screens/Home";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from './components/SearchBar';


/*
* npx create-react-native-app uber-eat-clone
* https://www.npmjs.com/package/react-native-google-places-autocomplete
* */
export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1,}}>
            <View style={{
                marginTop: 30,
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 20,
                alignSelf: 'center'
            }}>
                <HeaderTabs/>
            </View>
            <SearchBar/>

        </SafeAreaView>
    );
}

