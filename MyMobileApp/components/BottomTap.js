import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import Profile from "./Profile";
import Courses from "./Courses";
import Subjects from "./Subjects";

const Tab = createBottomTabNavigator();

export default function BottomTap() {
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
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="courses" component={Courses} />
      <Tab.Screen name="subjects" component={Subjects} />
    </Tab.Navigator>
  );
}
