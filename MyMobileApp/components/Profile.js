import { PaperProvider } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Profile({route}){
    const navigation = useNavigation();

    const detail = route.params;
    return(
        <PaperProvider>
            <View style={styles.container}>

                <View style={styles.body}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/profilepic/uovlogo.png')} style={styles.image}/>
                    </View> 
                </View> 

                <View style={styles.cont}>
                    <View></View>

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
  