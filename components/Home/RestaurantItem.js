import {Image, Linking, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItem({restaurantData}) {
    return (
        <View>
            {
                restaurantData.map((restaurant, index) => (
                    <View key={index} style={{backgroundColor: '#fff', borderRadius: 10, padding: 10, marginTop: 10}}>
                        <TouchableOpacity activeOpacity={.5 /*1 => is no give opacity*/}
                                          onPress={() => (
                                              // handleClick(restaurantData[index].image_url)
                                              console.log(restaurantData[index].name)
                                              )}>
                            <View>
                                {/* Restaurant image*/}
                                <RestaurantImage image={restaurant.image_url}/>
                                <RestaurantInfo name={restaurant.name} rate={restaurant.rating}/>
                                {/* Restaurant info*/}
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    )
}

const handleClick = ({url}) => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log("Don't know how to open URI: " + this.props.url);
        }
    });
    // Linking.openURL()
};


const RestaurantImage = ({image}) => {
    return (<>
        <Image source={{
            uri: image
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
        <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name={'heart-outline'} size={25} color={'#fff'}/>
        </TouchableOpacity>
    </>)
}
const RestaurantInfo = ({name, rate}) => {
    return (<View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10
    }}>
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30-50</Text>
        </View>
        <View style={{backgroundColor: '#eee', height: 30, width: 30, justifyContent: 'center', borderRadius: 15}}>
            <Text style={{textAlign: 'center'}}>{rate}</Text>
        </View>
    </View>)
}

