import React from 'react'; 
import {View, Pressable, Dimensions, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation}) =>{
    return (
        <View style={styles.mainContainer}>
            {
                state.routes.map((route , index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    let iconName;
                    if (route.name === 'Home') {
                        iconName = isFocused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = isFocused ? 'ios-list' : 'ios-list-outline';
                    } else if (route.name === 'Notes') {
                        iconName = isFocused ? 'ios-musical-notes' : 'ios-musical-notes-outline';
                    } else if (route.name === 'Profile') {
                        iconName = isFocused ? 'ios-card' : 'ios-card-outline';
                    } 

                    return (
                        <View key = {index} style = {[styles.mainItemContainer, {borderRightWidth: label=="notes"? 3:0}]}>
                            <Pressable onPress = {onPress} style = {{backgroundColor: isFocused ? "purple": "#182028", borderRadius: 20, }}>
                                <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15}}>
                                    <Ionicons name={iconName} size={25} color={"white"} />
                                </View>
                            </Pressable>
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        backgroundColor: "#182028",
        borderRadius: 25,
        marginHorizontal: width*0.1
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: 10,
        borderRadius: 1, 
        borderColor: "#333B42"
    }
})


export default TabBar; 