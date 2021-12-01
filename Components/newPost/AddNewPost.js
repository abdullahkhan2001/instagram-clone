import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import HomeScreen from '../../screens/HomeScreen'


const Header = ({navigation}) => (
    <View style={styles.headerContainer }>
        <TouchableOpacity onPress={() => navigation.goBack(HomeScreen)}>
            <Image 
            source={{
                uri: 'https://img.icons8.com/ios-filled/2x/back.png',}

                }style={{width: 25, height: 25}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}> NEW POST</Text>
        <Text></Text>

    </View>
)
const AddNewPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 25
    }
})

export default AddNewPost