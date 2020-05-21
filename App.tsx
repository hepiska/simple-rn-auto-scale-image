import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import ImageAutoScale from './auto-schale-image'

const {width} = Dimensions.get('window') 

export default function App() {
  return (
    <View style={styles.container}>
     <ImageAutoScale source={{uri: "https://ik.imagekit.io/boengkoes/belitung_wmwYVu2DR.jpg"}}  width={200}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
