import { courses, subjects, marks} from "../data/StudentsDb";
import { PaperProvider } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import Footer from "./Footer";
import BottomTap from "./BottomTap";
import { ScrollView } from "react-native-web";


export default function Subjects({route}){
    const {courses}=route.params;

    //const marksDetail = marks.find((marks => courses.course_id === ))
    return(
        <PaperProvider>

            <View style={styles.header}>
                <View >
                    <Header/>
                </View>
            </View>

                <View style={styles.body}>
                <View style={styles.section}>
                    <View><Text>Age: {student.age} | </Text></View>
                    <View><Text>Gender: {student.gender}</Text></View>
                </View>

                <View style={styles.section}>
                    <View><Text style={styles.heading}>Course Information</Text></View>
                    <View><Text>Code: {student.email}</Text></View>
                    <View><Text>Department: {student.phone}  </Text></View>
                    <View><Text>Duration: {student.address}</Text></View>
                    <View><Text>description: {student.address}</Text></View>
                </View>
                </View>

                <View style={styles.footer}>
                    <Footer/>
                </View>
                <View>
                    <BottomTap/>
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
      section1:{
        padding:20,
        textAlign:'center',
        justifyContent:'center',
      },

      section:{
        padding:20,
        textAlign:'left',
      },
      heading:{
        fontWeight:'100'
      },

      footer:{
        width:'100%',
        margin:10,
    }

  });
