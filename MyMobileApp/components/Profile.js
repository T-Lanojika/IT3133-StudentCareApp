import { PaperProvider } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import Footer from "./Footer";

export default function Profile({route}){
    const navigation = useNavigation();

    const student = route.params;

    return(
        <PaperProvider>

            <View style={styles.header}>
                <View >
                    <Header/>
                </View>
            </View>

                <View style={styles.body}>
                <View style={styles.section}>
                    <View>{student.profile_pic}</View>
                    <View><Text>{student.name}</Text></View>
                    <View><Text>Age: {student.age} | </Text></View>
                    <View><Text>Gender: {student.gender}</Text></View>
                </View>

                <View style={styles.section}>
                    <View><Text style={styles.heading}>Contact Information</Text></View>
                    <View><Text>Email: {student.email}</Text></View>
                    <View><Text>Age: {student.phone}  </Text></View>
                    <View><Text>Gender: {student.address}</Text></View>
                </View>

                <View style={styles.section}>
                <View><Text style={styles.heading}>Biological Information</Text></View>
                    <View><Text>Gender: {student.gender}</Text></View>
                    <View><Text>Age: {student.age} </Text></View>
                    <View><Text>Blood Group: {student.blood_group} </Text></View>
                </View>
                </View>


                <View style={styles.footer}>
                    <Footer/>
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
    body: {
        flex: 5,
        backgroundColor: '#F4F6F',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingHorizontal:20,
      },
      footer:{
        width:'100%',
        margin:10,
    }

  });
  