import { PaperProvider, TextInput, Button } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    const [id,setId]=useState(null);
    return(
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>UoV Student Care</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/images/uovlogo.png')} style={styles.image}/>
                    </View> 
                    <View style={styles.heading}>
                        <Text style={styles.headingText}>STUDENT LOGIN</Text>
                    </View>  
                    <View style={styles.input}>
                        <TextInput label={'Username'} mode="outlined" value={id} onChangeText={setId}></TextInput>
                    </View>
                    <View style={styles.input}>
                        <TextInput label={'Password'} mode="outlined"></TextInput>
                    </View>
                    <View style={styles.input}>
                        <Button style={styles.buttonText} mode="outlined" onPress={()=>{navigation.navigate('profile')}}>Login</Button>
                    </View>                 
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
  