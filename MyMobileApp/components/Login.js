import { PaperProvider, TextInput, Button } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {students} from '../data/StudentsDb';
import Header from "./Header";
import Footer from "./Footer";

export default function Login(){
    const navigation = useNavigation();
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const handleLogin = () => {
        if(!username || !password){
            setError('Please Check username and password');
            return;
        }

        const student = students.find((student) => {student.username === username && student.password === password});

        if(student){
            setError('');
            navigation.navigate('profile',{student});
        }
        else{
            setError('Please Check username and password');
        }
    }


    return(
        <PaperProvider>
            <View style={styles.container}>
                <View >
                    <Header/>
                </View>

                <View style={styles.body}>
                    <View style={styles.heading}>
                        <Text style={styles.headingText}>STUDENT LOGIN</Text>
                    </View>  
                    <View style={styles.input}>
                        <TextInput label={'Username'} mode="outlined" value={username} onChangeText={setUsername}></TextInput>
                    </View>
                    <View style={styles.input}>
                        <TextInput label={'Password'} mode="outlined" secureTextEntry value={password} onChangeText={setPassword}></TextInput>
                    </View>
                    <View style={styles.input}>
                        <Button style={styles.buttonText} mode="outlined" onPress={handleLogin}>Login</Button>
                    </View>  
                    {error && <Text style={styles.errorText}>{error}</Text>}

                    <View style={styles.footer}>
                        <Footer/>
                    </View>
               
                </View>


            </View>   
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    body: {
        //flex: 6,
        backgroundColor: '#F4F6F',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headingText:{
        textAlign:'center',
        margin:80,
        fontWeight:'bold',
        fontSize:24,
        
      },
    input:{
        marginBottom:10,
    },
    buttonText:{
        color: 'white',
        backgroundColor:'#4b0150',
        margin:20,
    },
    errorText:{
        alignItems: 'center',
        backgroundColor: '#e2bee2',
        justifyContent: 'center',

    }
    ,
    footer:{
        width:'100%',
        margin:10,
    }


  });
  