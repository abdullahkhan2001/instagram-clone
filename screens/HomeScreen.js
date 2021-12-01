import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import  Header  from '../Components/home/Header';
import Stories from '../Components/home/Stories';
import Post from '../Components/home/Post';
import { POSTS } from '../data/post';
import BottomTabs, {bottomTabIcons} from '../Components/home/BottomTabs';




 function HomeScreen({navigation}) {
  return (
    < >
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation}/>
    <ScrollView style={{marginTop: 35}}>
    <Stories />
    {
      POSTS.map((post, index) => (
        <Post post={post} key={index} />
      ))
    }
     
    </ScrollView>
     
    <BottomTabs icons={bottomTabIcons}/>
    
    
    </SafeAreaView>
    
     
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginTop: 50,
   
    
  },
  

  
})
export default HomeScreen;