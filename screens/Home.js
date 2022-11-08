import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem, {localRestaurants} from "../components/RestaurantItem";
import {Divider} from "react-native-elements";
import BottomTabs from "../components/BottomTabs";

const YELP_API_KEY = "7eDIXc9SDap-svxvDJWV-cPXk0h5BJ-KqzjHqRYfEs2COSLz2vbzSMEhEg3OdGRgj8636UEcF0EKRHevm5NKgQSXhbVbeBwrRj11CfCQUr--IhkQZE_S-CHDGwJoY3Yx"
const CLIENT_ID = "l0OV_owYSS3nG3z_lKv41w"


export default function Home() {
    const [city, setCity] = useState("SanDiego");
    const [activeTab, setActiveTab] = useState("Delivery");
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const getRestaurantFromYelp = () => {

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    }


    useEffect(() => {
        getRestaurantFromYelp(); // call back function
    }, [city, activeTab]); // dependencies to mke refresh for  getRestaurantFromYelp() if anything change
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
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantItem restaurantData={restaurantData}/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    );
}


