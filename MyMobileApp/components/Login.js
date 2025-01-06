import { PaperProvider, TextInput, Button } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {users} from '../data/StudentsDb';

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


        const user = users[username];

        if(user && user.password === password){
            navigation.navigate('profile',{username});
        }
        else{
            setError('Please Check username and password');
        }
    }


    return(
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>UoV Student Care</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/profilepic/uovlogo.png')} style={styles.image}/>
                    </View> 
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
               
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>UoV © Care</Text>
                </View>

            </View>   
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        //flexDirection: 'column',
    },
    header: {
        flex: 1,
        backgroundColor: '#4b0150',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    body: {
        flex: 5,
        backgroundColor: '#F4F6F',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingHorizontal:20,
      },
      imagepad:{
        width: '100%', // Adjust size as needed
        alignItems:'center',
        marginTop: 5,
      },
      image: {
        height: 100,
        resizeMode: 'contain',
    },
    headingText:{
        textAlign:'center',
        fontSize:30,
        marginBottom:20,
        marginTop:20,
    },
    input:{
        marginBottom:10,
    },
    buttonText:{
        color: '#FFFFFF',
        backgroundColor:'#4b0150',
    },
    errorText:{
        alignItems: 'center',
        backgroundColor: '#e2bee2',
        justifyContent: 'center',

    }
    ,

      footer: {
        flex: 0.5,
        backgroundColor: '#4b0150',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText:{
        color:'#FFFFFF',
        fontSize:12,
        textAlign:'center',
      }

  });
  