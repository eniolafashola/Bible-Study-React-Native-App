import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//import Home from '../layouts/home';
import Profile from '../layouts/profile';

import HomeTab from '../pages/homeTab';
import QuizPage from '../pages/quizPage';

import { color } from '../utils/color';

const Tab = createBottomTabNavigator();

function HomeStack() {
 return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          }
    
    // return <Ionicons name={iconName} size={size} color={color}     />;
    return <Text>Heyy</Text>;
       },
    })}
	screenOptions={{
		headerShown: false,
		tabBarActiveTintColor: color.body,
		tabBarInactiveTintColor: color.transW,
		tabBarStyle: {
			backgroundColor: color.head
		}
	}}>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

export default HomeStack;