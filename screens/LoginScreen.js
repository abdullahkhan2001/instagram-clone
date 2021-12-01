import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import LoginForm from '../Components/loginScereen/LoginForm'

const INSTAGRAM_LOGO = 'https://img.icons8.com/color/2x/instagram-new.png'

const LoginScreen = ({navigation}) =>  (
        <View style={styles.container }>
            <View style={styles.logoContainer }>
                <Image source={{uri: INSTAGRAM_LOGO, width: 100, height: 100}}/>
            </View>
            {<LoginForm navigation={navigation}/>}
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


export default LoginScreen;
