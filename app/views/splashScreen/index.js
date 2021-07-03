import React, { Component, useState } from 'react';
import { 
    View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
 
 
 
function SplashScreen() {
 
 
    return(
        <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
            
            <View style={styles.containerSup}>
                <Image
                    source={require('../../assets/icons/icon.png')}
                />
            </View>
            <View style={styles.containerSup2}>
                <Image
                    source={require('../../assets/icons/logo.png')}
                />
            </View>

            <View style={styles.containerMid}>
        
            </View>
        
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> {
                    props.navigation.navigate('WelcomeScreen', { ID: 1 });
                }}
            >
                <Text style={styles.title2}>COMENZAR</Text>
            </TouchableOpacity>
        </ImageBackground>
        );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    containerSup:{
        flexDirection: "row",
        marginLeft: 154,
        marginTop: 130,
    },
    containerSup2:{
        flexDirection: "row",
        marginLeft: 100,
        marginTop: 10,
    },
    containerMid: {
        margin:25,
        marginTop: 50,
    },

    title2: {
        color: 'white',
        fontSize: 24,
        marginVertical: 10,
    },

    text: {
        backgroundColor: '#FFFFFF24',
        height: 50,
        width: 360,
        paddingHorizontal: 10,
        opacity: 0.9,
 
        }, 
    btn: {
        borderWidth: 1,
        borderColor: 'white',
        height: 68,
        width: 327,
        marginTop: 20,
        backgroundColor: '#FFFFFF24',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
        opacity: 0.9,
        borderRadius: 5,
    },
});
 
export default SplashScreen;