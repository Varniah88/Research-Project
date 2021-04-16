import React from 'react';
import {StyleSheet, Dimensions, Text, View,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { IconButton, Colors } from "react-native-paper";
function OCRScreen() {
  const pickFromGallery =async ()=>{
    const {granted}= await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:1
      })
      console.log(data);
    }else{
      Alert.alert("you need permisson")
    }
  }
    return (
        <View style={styles.container}>
       
       <IconButton
            style={styles.camera}
            icon="camera"
            color={Colors.white}
            size={50}
            onPress={() => pickFromGallery() }
          />
        
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      preview: { 
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      }
})

export default OCRScreen;