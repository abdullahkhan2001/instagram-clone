import React from 'react';
import {  StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

 function Header({navigation}) {
  return (
    <View style={styles.container}>
<TouchableOpacity>
<Image source={require('../../assets/Insta4.png')} style={styles.Avatar}/>
</TouchableOpacity>

       <View style={styles.Iconcontainer}>
      <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
      <Entypo name="squared-plus" size={24} color="black" style={styles.Icon} />
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="hearto" size={24} color="black" style={styles.Icon} />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <View style={styles.unreadbadge}>
          <Text style={styles.unreadbadgeText}>11</Text>
        </View>
      <FontAwesome5 name="facebook-messenger" size={24} color="black"  style={styles.Icon}/>
      </TouchableOpacity>
      </View>
     
      
      
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    
  
    justifyContent: 'space-between',
    
    marginBottom: -50
    
    },
  Avatar: {
      width: 140,
      height: 50,
      margin : 10,
      marginTop: -13,
     
     
    
      
     
      
  },
  Iconcontainer: {
    flexDirection: 'row',
    
  },
  Icon: {
    width: 50,
    height: 50,
   flexDirection: 'row',
   marginLeft: -15  
    
},
unreadbadge: {
  backgroundColor: 'red',
  position: 'absolute',
  left: -3,
  top: -10,
  width: 18,
  height: 18,
  borderRadius: 5,
  zIndex: 100,
  alignItems: 'center',
  justifyContent: 'center',

},
unreadbadgeText: {
  fontSize: 13,
 fontWeight: '600',
 marginBottom: 3,
}
  
  
});
export default Header;