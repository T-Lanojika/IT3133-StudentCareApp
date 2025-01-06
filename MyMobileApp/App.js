import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Subjects from './components/Subjects';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='login' component={Login} options={{title:'Login'}}/>
          <Stack.Screen name='profile' component={Profile} options={{title:'Profile'}}/>
          <Stack.Screen name='courses' component={Courses} options={{title:'Courses'}}/>
          <Stack.Screen name='subjects' component={Subjects} options={{title:'Subjects'}}/>
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
