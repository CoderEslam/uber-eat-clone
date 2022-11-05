import {View, Text, SafeAreaView} from "react-native";
import Home from "./screens/Home";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from './components/SearchBar';
import Categories from "./components/Categories";


/*
* npx create-react-native-app uber-eat-clone
* https://www.npmjs.com/package/react-native-google-places-autocomplete
* */
export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1,}}>
            <View style={{
                marginTop: 30,
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 20,
                alignItems: 'center',
                flexDirection: 'column',
                marginHorizontal: 10
            }}>
                <HeaderTabs/>
                <SearchBar/>
            </View>
            <Categories/>
        </SafeAreaView>
    );
}

