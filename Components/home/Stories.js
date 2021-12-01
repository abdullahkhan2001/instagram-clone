import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { USERS } from '../../data/user';






 function Stories() {
  return (
   <View style={styles.container}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false} >
       {USERS.map((story, index) => (
         <View key = {index} style={{alignItems: 'center', marginHorizontal: 3}}>
           <Image source={{uri: story.image}} style={styles.story} />
           <Text >
            {
              story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()
            }
           </Text>
         </View>
       ))}
     </ScrollView>
   </View>
   )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    
    margin: 10,
    
    
    marginBottom: 10,
  },
 story: {
   width: 70,
   height: 70,
   borderRadius: 50,
   marginLeft: 6,
   borderWidth: 3,
   borderColor: '#ff8501',
 }
});
export default Stories;