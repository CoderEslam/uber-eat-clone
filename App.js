import {View, Text, SafeAreaView, ScrollView} from "react-native";
import Home from "./screens/Home";
import HeaderTabs from "./components/Home/HeaderTabs";
import SearchBar from './components/Home/SearchBar';
import Categories from "./components/Home/Categories";
import RestaurantItem from "./components/Home/RestaurantItem";
import RestaurantDetails from "./screens/restaurantDetails";


/*
* npx create-react-native-app uber-eat-clone
* https://www.npmjs.com/package/react-native-google-places-autocomplete
* */
export default function App() {
    return (
        <RestaurantDetails/>
    );
}

