import React, { Component } from 'react';
import {Text,Image,Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
export default class Register extends React.Component{
  render(){
     
    return(
      <View style={{backgroundColor:"#fff", height:"100%"}}>
        <Image source={require('../../assets/reg.jpg')} 
          style = {{width:"100%", height:"43%"}}
        />
           <Text
           style={{
             fontSize:28,
             alignSelf:'center'
           }}
           > Register Here! </Text>

           <Text style={{
             marginHorizontal:40,
             alignSelf:'center',
             marginTop:5,
             opacity:0.4
           }}>Write here about page</Text>

           <View style={{
        
             flexDirection:'row',
             alignItems:'center',
             marginHorizontal:55,
             borderWidth:2,
             marginTop:50,
             paddingHorizontal:10,
             borderColor:'#00716F',
             borderRadius:23,
             paddingVertical:3

           }}>
             
             <TextInput 
             
            placeholder="email"
            placeholderTextColor ="#00716F"
             style={{paddingHorizontal:10}}/>
           </View>

           <View style={{
            
             flexDirection:'row',
             alignItems:'center',
             marginHorizontal:55,
             borderWidth:2,
             marginTop:15,
             paddingHorizontal:10,
             borderColor:'#00716F',
             borderRadius:23,
             paddingVertical:3

           }}>
             
             <TextInput 
            secureTextEntry
            placeholder="Password"
            placeholderTextColor ="#00716F"
             style={{paddingHorizontal:10}}/>
           </View>

           
           <View style={{
            
             flexDirection:'row',
             alignItems:'center',
             marginHorizontal:55,
             borderWidth:2,
             marginTop:15,
             paddingHorizontal:10,
             borderColor:'#00716F',
             borderRadius:23,
             paddingVertical:3

           }}>
             
             <TextInput 
             secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor ="#00716F"
             style={{paddingHorizontal:10}}/>
           </View>

           <View style={{
            
             marginHorizontal:55,
             alignItems:'center',
             justifyContent:'center',
             marginTop:30,
             backgroundColor:"#00716F",
             paddingVertical:10,
             borderRadius:23,
             fontWeight:'bold'

           }}>
             <Text style={{
               color:'white'
             }}>Register</Text>
           </View>
           
      </View>
     
    )
  }
}