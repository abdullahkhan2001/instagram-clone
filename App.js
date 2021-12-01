import React  from 'react';
import { StyleSheet } from 'react-native';
import SignedInStack from './navigation';



export default function App() {
  return (
    <>
    <SignedInStack />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   alignItems: 'center',
  }

  
})