import {Image, Text, View} from "react-native";

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU';
const title = 'Pizza';
const description = 'Pizza * Pizza * ......'

export default function About() {
    return (
        <View>
            {/*Image*/}
            <RestaurantImage image={image}/>
            {/*Title*/}
            <RestaurantTitle title={title}/>
            {/*Description*/}
            <RestaurantDescription description={description}/>
        </View>
    )
}


const RestaurantImage = (props) => {
    return (
        <View>
            <Image source={{uri: props.image}} style={{width: '100%', height: 180}}/>
        </View>
    )
}

const RestaurantTitle = (props) => {
    return (
        <View>
            <Text style={{fontSize: 20, fontWeight: '600', marginTop: 10, marginHorizontal: 15}}> {props.title}</Text>
        </View>
    )
}

const RestaurantDescription = (props) => {
    return (
        <View>
            <Text style={{
                fontSize: 15.5,
                fontWeight: '400',
                marginTop: 10,
                marginHorizontal: 15
            }}> {props.description}</Text>
        </View>
    )
}