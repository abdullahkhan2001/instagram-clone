import React, {useState} from 'react'
import { View,Text, TextInput, Image, TouchableOpacity, Button } from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../../screens/HomeScreen'


const PLACEHOLDER_IMG = 'https://img.icons8.com/glyph-neue/2x/gallery.png'
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is Required'),
    caption: Yup.string().max(2200,'Caption has reached the charector'),
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik initialValues={{caption: '', imageUrl: ''}}
        onSubmit={values => {console.log(values)
        navigation.goBack(HomeScreen)
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}>
            {({
                handleBlur, handleChange, handleSubmit, values, errors, isValid
            }) => (
                <>
                <View style={{
                    margin: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}> 
                <TouchableOpacity>
                    <Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}}
                    style={{width: 100, height: 100}}/>
                </TouchableOpacity>
                <View style={{flex: 1, marginLeft: 12}}>
                <TextInput
                style={{fontSize: 17, marginTop: 10}}
                placeholder='Write a Caption' 
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption} />
                </View>
                </View>
                <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 0.19,
  }}
/>
                <TextInput
                onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                style={{fontSize: 15, marginTop: 10, marginLeft: 15}}
                placeholder='Enter Image Url' 
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}/>
                {errors.imageUrl && (
                    <Text style={{fontSize: 10, color: 'red', marginLeft: 15}}>
                        {errors.imageUrl}
                    </Text>
                )}
                <Button onPress={handleSubmit} title='Share' disabled={!isValid}  />
                </>
            )}

        </Formik>
    )
}


export default FormikPostUploader
