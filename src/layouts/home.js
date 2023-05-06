//import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FinishQuizPage from '../pages/finishQuizPage';
import QuizPage from '../pages/quizPage';
// import MainPage from '../pages/mainPage';

const Stack = createStackNavigator();

function Home() {
 return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={QuizPage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={FinishQuizPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;