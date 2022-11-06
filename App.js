import {View, Text, SafeAreaView, ScrollView} from "react-native";
import Home from "./screens/Home";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from './components/SearchBar';
import Categories from "./components/Categories";
import RestaurantItem from "./components/RestaurantItem";


/*
* npx create-react-native-app uber-eat-clone
* https://www.npmjs.com/package/react-native-google-places-autocomplete
* */
export default function App() {
    return (
        <Home/>
    );
}

