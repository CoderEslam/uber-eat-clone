import {Image, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantImage() {
    return (
        <>
            <Image source={{
                uri: 'https://media-cdn.tripadvisor.com/media/photo-s/18/09/5f/2e/terrace.jpg'
            }}
                   style={{
                       width: "100%",
                       height: 180,
                       borderWidth: 2,
                       borderColor: '#fff',
                       borderRadius: 20,
                       paddingHorizontal: 10
                   }}
            />
            <TouchableOpacity style={{position:"absolute",right:20,top:20}}>
                <MaterialCommunityIcons name={'heart-outline'} size={25} color={'#fff'}/>
            </TouchableOpacity>
        </>
    )
}