import React, { Component, useState } from 'react';
import { 
    View, StyleSheet, Text, TextInput, TouchableOpacity 
} from 'react-native';
import axios from 'axios';

function CreateUser() {

    const[Nombre, setNombre] = useState('Hello');
    const[Email, setEmail] = useState();
    const[Contraseña, setContraseña] = useState();

    return(
        <View style={StyleSheet.container}>
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

            <TouchableOpacity
                style={styles.btn}
                onPress={()=> {
                    console.log({ Nombre, Email, Contraseña });
                }}
            >
                <Text style={styles.title2}>REGISTRAR</Text>
            </TouchableOpacity>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
       
        
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 24,
    },
    title2: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: 327,
        paddingHorizontal: 10,
        marginLeft: 24,
        }, 
    btn: {
        borderWidth: 1,
        borderColor: 'black',
        height: 68,
        width: 327,
        marginTop: 113,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
    },
});

export default CreateUser;