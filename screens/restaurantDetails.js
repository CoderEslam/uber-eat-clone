import {View} from "react-native";
import About from "../components/restaurantDetails/About";
import {Divider} from "react-native-elements";
import Menuitem from "../components/restaurantDetails/Menuitem";

export default function RestaurantDetails() {
    return (
        <View>
            <About/>
            <Divider width={1.8} style={{marginVertical: 10}}/>
            <Menuitem/>
        </View>
    )
}