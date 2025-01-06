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
        <Stack.Navigator initialRouteName='login' style={styles.container}>
          <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='profile' component={Profile} options={{title:'UoV Student Care'}} style={styles.navigation}/>
          <Stack.Screen name='courses' component={Courses} options={{title:'Courses'}}/>
          <Stack.Screen name='subjects' component={Subjects} options={{title:'Subjects'}}/>
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  navigation:{
    backgroundColor: '#4b0150',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    //fontSize: 24,
    //fontWeight: 'bold',
  }
})
