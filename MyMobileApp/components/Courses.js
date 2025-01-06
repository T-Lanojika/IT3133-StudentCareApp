import { courses } from "../data/StudentsDb";
import { PaperProvider } from "react-native-paper";
import {  StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import Footer from "./Footer";
import BottomTap from "./BottomTap";
import { ScrollView } from "react-native-web";


export default function Courses({route}){
    const {user} = route.params;
    const courseDetail = courses.find((course => user.course_id === courses.id))

    return(
        <PaperProvider>

            <View style={styles.header}>
                <View >
                    <Header/>
                </View>
            </View>

                <View style={styles.body}>
                <View style={styles.section1}>
                    <View><Text variant="displaySmall">{courseDetail.name}</Text></View>
                    <View><Text >{courseDetail.course_code} | {courseDetail.department}</Text></View>
                </View>

                <View style={styles.section}>
                    <View><Text style={styles.heading}>Course Information</Text></View>
                    <View><Text>Code: {courseDetail.course_code}</Text></View>
                    <View><Text>Department: {courseDetail.department}  </Text></View>
                    <View><Text>Duration: {courseDetail.duration}</Text></View>
                    <View><Text>description: {courseDetail.description}</Text></View>
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
  