import React, { Component, useState } from 'react';
import { 
    View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
 
 
 
function WelcomeScreen() {
 
 
    return(
        <ImageBackground source={require('../../assets/bg2.png')} style={styles.container}>
            
            <View style={styles.containerSup}>
                <Image
                    source={require('../../assets/icons/icon.png')}
                />
            
            </View>
            <View style={styles.containerSup2}>
            <Text style={styles.titleTop}>Bienvenido</Text>
            </View>
            <View style={styles.containerMid}>
            
            <TextInput 
                style={styles.text}
                placeholder= "Email"
                placeholderTextColor= 'white'
            />
            </View>
            <View style={styles.containerMid2}>
            <TextInput 
                style={styles.text}
                placeholder= "Contraseña"
                placeholderTextColor= 'white'
            />
            </View>
            <View style={styles.containerBot2}>
                <Text style={styles.titlePass}>¿Olvidaste tu contraseña?</Text>
            </View>
        
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> {
                    console.log({ Nombre, Email, Contraseña });
                }}
            >
                <Text style={styles.titleBtn}>ENTRAR</Text>
            </TouchableOpacity>

                <View style={styles.containerBot}>
                <Text style={styles.titleBot}>REGISTRATE</Text>
                </View>
            
        </ImageBackground>
        
        );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    containerSup:{
        flexDirection: "column",
        marginLeft: 150,
        marginTop: 75,
    },
    containerSup2:{
        marginTop: 40,
        marginLeft: 110.
    },
    containerMid: {
        margin:25,
        marginTop: 20,
        
    },
    containerMid2: {
        margin:25,
        marginTop: 0.2,
    },
    containerBot: {
        marginTop: 15,
        marginLeft: 18,
    },
    containerBot2: {
        marginTop: -15,
    },
    titleTop: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 35,
    },
    titleBtn: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    titlePass: {
        color: 'white',
        fontSize: 20,
        marginLeft: 45,
    },
    titleBot: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 130,
    },
    placeholder: {
        color: 'white',
    },
    text: {
        backgroundColor: '#FFFFFF24',
        height: 70,
        width: 360,
        paddingHorizontal: 10,
        opacity: 0.9,
        color: 'white',
        fontSize: 25,
        paddingLeft: 30,
 
        }, 
    btn: {
        borderWidth: 1,
        borderColor: 'white',
        height: 68,
        width: 360,
        marginTop: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 24,
        borderRadius: 5,
        fontWeight: 'bold',
        fontFamily: 'Raleway',
    },
});
 
export default WelcomeScreen;