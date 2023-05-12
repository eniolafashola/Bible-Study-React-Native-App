import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import { Button } from 'react-native-paper';

//import Home from '../layouts/home';
import Profile from '../layouts/profile';
import HomeTab from '../pages/homeTab';

import { color } from '../utils/color';

const Tab = createBottomTabNavigator();

function HomeStack() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let icon;
        
        if (route.name === 'Study') {
          iconName = focused
          ? 'school'
          : 'school-outline';
          
        } else if (route.name === 'Profile') {
          iconName = focused
          ? 'ios-list'
          : 'ios-list-outline';
        }
    
          return <Ionicons name={iconName} size={size} color={color}     />;
        },
        tabBarActiveTintColor: color.body,
        tabBarInactiveTintColor: color.transW,
        tabBarStyle: {
          backgroundColor: color.head
        },
        })}
      >
        <Tab.Screen
          name="Study"
          component={HomeTab}
          options={{
            headerStyle: {
              height: 125,
              backgroundColor: color.head,
            },
            headerRight: () => (
              <Ionicons name='settings' size={15} color={color.white} />
            )
        }} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              height: 85,
              backgroundColor: color.head,
            },
          }} />
      </Tab.Navigator>
  );
}

export default HomeStack;