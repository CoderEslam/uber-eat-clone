import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Divider} from "react-native-elements";


const foods = [{
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}, , {
    title: "Lasagne",
    description: "jlebkjrwgbkjbvr",
    price: '$23.5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}]

export default function Menuitem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>
                            {/* food info*/}
                            <FoodInfo food={food}/>
                            {/*food image*/}
                            <FoodImage food={food}/>
                        </View>
                        <Divider width={1} orientation={'vertical'}/>
                    </View>
                ))
            }
        </ScrollView>
    )
}

const FoodImage = (props) => {
    return (
        <View>
            <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}}/>
        </View>
    )
}

const FoodInfo = (props) => {
    return (
        <View key={props.key} style={{width: 240, justifyContent: 'space-evenly'}}>
            <Text style={styles.title}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: '600'
    }
})












