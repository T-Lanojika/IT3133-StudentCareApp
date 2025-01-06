import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import Subjects from "./components/Subjects";
import BottomTap from "./components/BottomTap";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#4b0150" },
            headerTitleStyle: { fontWeight: "bold", color: "#fff" },
          }}
        >
          <Stack.Screen
            name="login"
            component={Login}
            options={{ title: "UoV Student Care" }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ title: "UoV Student Care" }}
            style={styles.navigation}
          />
          <Stack.Screen
            name="courses"
            component={Courses}
            options={{ title: "Courses" }}
          />
          <Stack.Screen
            name="subjects"
            component={Subjects}
            options={{ title: "Subjects" }}
          />
          <Stack.Screen
            name="bottomTap"
            component={BottomTap}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
