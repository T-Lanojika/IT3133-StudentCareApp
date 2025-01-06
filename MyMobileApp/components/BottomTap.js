import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import Profile from './Profile';
import Courses from './Courses';
import Subjects from './Subjects';

const Tab = createBottomTabNavigator();

export default function BottomTap(){
    return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName='Profile' screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if(route.name === 'Profile'){
                iconName = focused ? 'person' : 'person-ouline';
            }
            else if(route.name === 'Courses'){
                iconName = focused ? 'book' : 'book-outline';
            }
            if(route.name === 'Profile'){
                iconName = focused ? 'clipboard' : 'clipboard-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor:'#4b0150',
          tabBarInactiveTintColor:'gray',

        })}>

            <Tab.Screen name='profile' component={Profile}/>
            <Tab.Screen name='course' component={Courses}/>
            <Tab.Screen name='subjects' component={Subjects}/>
            
        </Tab.Navigator>
        </NavigationContainer>
    )
}