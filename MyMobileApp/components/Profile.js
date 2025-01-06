import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import BottomTap from "./BottomTap";
import { ScrollView } from "react-native-web";
import { useRoute } from "@react-navigation/native";

export default function Profile() {
  const route = useRoute();
  const { student } = route.params;

  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.body}>
          <View style={styles.section1}>
            <View>
              <Image source={student.profile_pic} style={styles.profilePic} />
            </View>
            <View>
              <Text>{student.name}</Text>
            </View>
            <View>
              <Text>
                Age: {student.age} | Gender: {student.gender}
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.heading}>Contact Information</Text>
            </View>
            <View>
              <Text>Email: {student.email}</Text>
            </View>
            <View>
              <Text>Phone: {student.phone}</Text>
            </View>
            <View>
              <Text>Address: {student.address}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.heading}>Biological Information</Text>
            </View>
            <View>
              <Text>Gender: {student.gender}</Text>
            </View>
            <View>
              <Text>Age: {student.age} </Text>
            </View>
            <View>
              <Text>Blood Group: {student.blood_group} </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
    //flexDirection: 'column',
  },
  body: {
    flex: 5,
    backgroundColor: "#F4F6F",
    alignItems: "center",
    justifyContent: "center",

    //paddingHorizontal:20,
  },
  profilePic: {
    width: 100,
    height: 500,
  },
  section1: {
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
  },

  section: {
    padding: 20,
    textAlign: "left",
  },
  heading: {
    fontWeight: "100",
  },

  footer: {
    width: "100%",
    margin: 10,
  },
});
