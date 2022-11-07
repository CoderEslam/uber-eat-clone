import {Text, View, StyleSheet, TextInput} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

/*
* style={{
                                          textInput: {
                                              backgroundColor: '#eee',
                                              borderRadius: 20,
                                              fontWeight: "700",
                                              marginTop: 7,
                                          }, textInputContainer: {
                                              backgroundColor: '#eee',
                                              borderRadius: 50,
                                              flexDirection: 'row',
                                              alignItems: 'center',
                                              marginRight: 10
                                          }
                                      }}
* */

export default function SearchBar({cityHandler}) {
    return (<View style={{marginTop: 15, flexDirection: 'row', paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#eee', borderRadius: 50}}>
            <TextInput placeholder={'eslam'} onChangeText={cityHandler}/>
            <GooglePlacesAutocomplete
                placeholder={'Search'}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.warn(data, details)
                }}
                query={{
                    key: 'AlzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4',
                }}
                styles={{
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    },
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    predefinedPlacesDescription: {
                        color: '#00bcff',
                    },
                }}
                renderLeftButton={() => <View
                    style={{alignSelf: 'center', padding: 5}}>
                    <Ionicons name={'location-sharp'} size={24}/>
                </View>} renderRightButton={() => (
                <View style={{
                    flexDirection: 'row',
                    marginRight: 8,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: 9,
                    borderRadius: 30,
                }}>
                    <AntDesign name={'clockcircle'} size={11}/>
                    <Text>Search</Text>
                </View>
            )}
            />
        </View>
    </View>)

}


const styles = StyleSheet.create({
    googlePlace: {}
})