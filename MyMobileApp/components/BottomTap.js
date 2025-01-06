import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import Profile from './Profile';
import Courses from './Courses';
import Subjects from './Subjects';

export default function BottomTap(){

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Profile' screenOptions={({route}) => {
            let iconName;

            if(route.name === 'Profile'){
                iconName = 'person';
            }
            else if(route.name === 'Courses'){
                iconName = 'book';
            }
            if(route.name === 'Profile'){
                iconName = 'clipboard';
            }


        }}>

        </Tab.Navigator>
    )
}