import React, {useState} from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'



export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/2x/home.png',
        inactive: 'https://img.icons8.com/ios/2x/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/2x/search.png',
        inactive: 'https://img.icons8.com/ios/2x/search.png',
    },
    {
        name: 'Reals',
        active: 'https://img.icons8.com/ios-filled/2x/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/2x/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency/2x/like.png',
        inactive: 'https://img.icons8.com/ios/2x/like.png',
    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/office/2x/circled-user-male-skin-type-4.png      ',
        inactive: 'https://img.icons8.com/wired/2x/circled-user.png',
    },
]

 const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] =  useState('Home')

    const  Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.Wrapper}>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  }}
/>
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Wrapper: {
   
   width: '100%',
   bottom: '0.1%',
   
   
    },
    container: {
      
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingTop: 10
    },
   icon: {
     width: 30,
     height: 30,
     
   }
  });


export default BottomTabs
