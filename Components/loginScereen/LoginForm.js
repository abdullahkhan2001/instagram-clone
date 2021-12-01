import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import Validator  from 'email-validator'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'


const LoginForm = ({navigation}) => {
    const loginFormSchema= Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'possword has to have at least 8 charactor')
    })
    const onLogin =  (email, password) => {
        
        const auth = signInWithEmailAndPassword( auth, email, password)
            
            .then((userCredential) => {
                // Signed in 
                console.log('firebase login')
                const user = userCredential.user;
                // ...
              }).catch((error) => {
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
              });
           /* Alert.alert(
                'MY LORD...',
                errorMessage + '\n\n... what would you like to do next',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK'),
                        styles: 'cancel',
                    },
                    {
                        text: 'Sign Up', onPress: () => navigation.push('SignupScreen')
                    }
                ] )*/
        
    }
    return(
        <View style={styles.wrapper}>
            <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                onLogin(values.email, values.password)
            }}
            validationSchema= {loginFormSchema}
            validateOnMount={true}
            >
            {({handleChange, handleBlur, handleSubmit, values , isValid }) => (
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
                borderColor: 1 > values.password.length || values.password.length > 7 ? '#ccc' : 'red',
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
            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <TouchableOpacity>  
                  <Text style={{color: '#6BB0F5'}}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <Pressable
            titleSize={20}
            style={styles.button ( isValid )}
            onPress={onLogin}
            disabled={!isValid}
            >
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
                <Text>Don't have an account </Text>
                <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                    <Text style={{ color: '#6BB0F5'}}>Sign Up</Text>
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
}),
})
export default LoginForm
