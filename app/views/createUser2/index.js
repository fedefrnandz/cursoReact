import React, { Component, useState } from 'react';
import { 
    View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
 
 
 
function CreateUser2() {
 
    const[Nombre, setNombre] = useState('Jose Contreras');
    const[Email, setEmail] = useState('jose_contreras@gmail.com');
    const[Contraseña, setContraseña] = useState();
 
    return(
        <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
            
            <View style={styles.containerSup}>
                <Image
                    source={require('../../assets/icons/arrow-left.png')}
                />
                <Text style={styles.title0}>Registro</Text>
            </View>

            <View style={styles.containerMid}>
            <Text style={styles.title}>Nombre</Text>
            <TextInput 
                style={styles.text}
                value={Nombre}
                onChangeText={val => setNombre(val)}
            />
            <Text style={styles.title}>Email</Text>
            <TextInput 
                style={styles.text}
                value={Email}
                onChangeText={val => setEmail(val)}
            />
            <Text style={styles.title}>Contraseña</Text>
            
            <TextInput 
                secureTextEntry
                style={styles.text}
                value={Contraseña}
                onChangeText={val => setContraseña(val)}
            />
            </View>
        
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> {
                    console.log({ Nombre, Email, Contraseña });
                }}
            >
                <Text style={styles.title2}>REGISTRAR</Text>
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
        marginLeft: 24,
        marginTop: 24,
    },
    containerMid: {
        margin:25,
        marginTop: 50,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    title0: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 35,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12,
        
    },
    title2: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    title3: {
        color: 'white',
        fontSize: 16,
        marginVertical: 10,
        marginLeft: 130,
    },
    text: {
        backgroundColor: '#FFFFFF24',
        height: 50,
        width: 360,
        paddingHorizontal: 10,
        opacity: 0.9,
        color: 'white',
        fontSize: 18,
        }, 

    btn: {
        borderWidth: 1,
        borderColor: 'white',
        height: 68,
        width: 327,
        marginTop: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
        borderRadius: 5,
        fontWeight: 'bold',
        fontFamily: 'Raleway',
    },
});
 
export default CreateUser2;