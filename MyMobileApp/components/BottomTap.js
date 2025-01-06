import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import Profile from "./Profile";
import Courses from "./Courses";
import Subjects from "./Subjects";
import { courses } from "../data/StudentsDb";

const Tab = createBottomTabNavigator();

export default function BottomTap({ student }) {
  return (
    <Tab.Navigator
      initialRouteName="profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "courses") {
            iconName = focused ? "book" : "book-outline";
          }
          if (route.name === "subjects") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4b0150",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="profile">
        {() => {
          <Profile user={student} />;
        }}
      </Tab.Screen>
      <Tab.Screen name="courses">
        {() => {
          <Courses user={student} />;
        }}
      </Tab.Screen>
      <Tab.Screen name="subjects">
        {() => {
          <Subjects user={student} />;
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
