import {Image, ScrollView, Text, View} from "react-native";


const items = [
    {
        image: require('../assets/images/shopping-bag.png'),
        text: 'pick-up'
    }, {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    }, {
        image: require('../assets/images/bread.png'),
        text: 'Bread'
    }, {
        image: require('../assets/images/fast-food.png'),
        text: 'Fast food'
    }, {
        image: require('../assets/images/deals.png'),
        text: 'Deals'
    }, {
        image: require('../assets/images/coffee.png'),
        text: 'Coffee & Tea'
    }, {
        image: require('../assets/images/desserts.png'),
        text: 'Desserts'
    },
]
export default function Categories() {
    return (
        <View style={{marginTop:5,backgroundColor:'#fff',paddingVertical:10,paddingLeft:20,borderRadius:20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/*loops start*/}
                {items.map((item, index) => (
                    <View key={index} style={{alignItems: 'center', marginRight: 30}}>
                        <Image
                            source={item.image} style={{width: 50, height: 50, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 13, fontWeight: '900',}}>{item.text}</Text>
                    </View>
                ))}
                {/*loops end*/}
            </ScrollView>
        </View>
    )
}