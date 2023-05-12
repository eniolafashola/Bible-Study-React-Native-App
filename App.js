import 'react-native-gesture-handler';
import * as React from 'react';
// import { Platform, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FinishQuizPage from './src/pages/finishQuizPage';
import QuizPage from './src/pages/quizPage';
import HomeStack from './src/layouts/homeStack';
import { ScoreProvider } from './src/contexts/data.context';


const Stack = createStackNavigator();

export default function App() {
  
  return (
  	<ScoreProvider>
     	 <NavigationContainer>
   	   		<Stack.Navigator
			  	screenOptions={{
			  	headerShown: false,
			  	//tabBarShown: false
			  }}>
   	      	<Stack.Screen  name="HomeStack" component={HomeStack} />
             	<Stack.Screen name="QuizPage" component={QuizPage} />
          	   	<Stack.Screen 
					name="FinishQuizPage" 
					component={FinishQuizPage} 
				/>
  		   </Stack.Navigator>
  	    </NavigationContainer>

    </ScoreProvider>
  );
}