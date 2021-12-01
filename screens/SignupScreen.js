import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import SignupForm from '../Components/signupScreen/SignupForm'


const INSTAGRAM_LOGO = 'https://img.icons8.com/color/2x/instagram-new.png'

const SignupScreen = ({navigation}) =>  (
        <View style={styles.container }>
            <View style={styles.logoContainer }>
                <Image source={{uri: INSTAGRAM_LOGO, width: 100, height: 100}}/>
            </View>
            {<SignupForm navigation={navigation}/>}
        </View>
    )

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            paddingTop: 50,
            paddingHorizontal: 12
        },
        logoContainer: {
            alignItems: 'center',
            marginTop: 60
        }
    })


export default SignupScreen;