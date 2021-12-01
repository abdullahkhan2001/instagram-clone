import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable,Alert } from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import Validator  from 'email-validator'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'


const SignupForm = ({navigation}) => {
    const SignupFormSchema= Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'possword has to have at least 8 charactor')
    })
    const onSignIn =  (username,email, password) => {
        
        createUserWithEmailAndPassword(auth, username,email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        }).catch(error).
        Alert.alert(
            'MY LORD...',
            error.message + '\n\n... what would you like to do next',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK'),
                    styles: 'cancel',
                },
                {
                    text: 'Sign Up', onPress: () => navigation.push('SignupScreen')
                }
            ] )
    
}
    return(
        <View style={styles.wrapper}>
            <Formik
            initialValues={{email: '',username: '', password: ''}}
            onSubmit={values => {
                console.log(values)
            }}
            validationSchema= {SignupFormSchema}
            validateOnMount={true}
            >
            {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
               <>
               <View style= {[styles.inputField,
            {
                borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red',
            }]}>
                <TextInput 
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur= {handleBlur('email')}
                value={values.email}
                />
            </View>
            <View style= {[styles.inputField,
            {
                borderColor: 1 > values.username.length || values.username.length > 2 ? '#ccc' : 'red',
            }]}>
                <TextInput 
                placeholderTextColor='#444'
                placeholder='Username'
                autoCapitalize='none'
                textContentType= 'username'
                onChangeText={handleChange('username')}
                onBlur= {handleBlur('username')}
                value={values.username}
                />
            </View>
            <View style= {[styles.inputField,
            {
                borderColor: 1 > values.password.length || values.password.length > 8 ? '#ccc' : 'red',
            }]}>
                <TextInput 
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType= 'password'
                onChangeText={handleChange('password')}
                onBlur= {handleBlur('passwod')}
                value={values.password}
                />
            </View>
            
            <Pressable
            titleSize={20}
            style={styles.button(isValid)}
            onPress={onSignIn}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.signupContainer}>
                <Text>Already have an account </Text>
                <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                    <Text style={{ color: '#6BB0F5'}}>LogIn</Text>
                </TouchableOpacity>
            </View> 
            </> 
            )}
            
          
           </Formik>
        </View>
    )}

const styles = StyleSheet.create({
wrapper: {
    marginTop: 80,
},
inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
},
signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
},
buttonText: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 20,
},
button: isValid => ( {
    backgroundColor:  isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
})
})
export default SignupForm
