import React from 'react'
import { View, Text } from 'react-native'
import AddNewPost from '../Components/newPost/AddNewPost'
import FormikPostUploader from '../Components/newPost/FormikPostUploader'

const NewPostScreen = ({navigation}) => {
    return (
        <View>
            <AddNewPost navigation={navigation} />
            <FormikPostUploader navigation={navigation}/>
        </View>
    )
}

export default NewPostScreen