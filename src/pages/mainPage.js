import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FinishQuizPage from '../pages/finishQuizPage';
import QuizPage from '../pages/quizPage';

import { useContext } from 'react';
import { ScoreContext } from '../contexts/data.context';
import HeadingBox from '../components/heading-box';

import { color } from '../utils/color';

const Stack = createNativeStackNavigator();

const MainPage = ({navigation}) => {
	const { currentScore, setCurrentScore } = useContext(ScoreContext);
	
	const contToStart = () => {
		setCurrentScore(0);
		navigation.navigate('QuizPage');
	}
	
	return(
		<SafeAreaView style={styles.container}>
			<HeadingBox 
				title='BIBLE STUDY'
				clickIcon={<Text>click me</Text>}
			/>
            <View style={styles.body} onStartShouldSetResponder={contToStart}>
				
			</View>
		</SafeAreaView>
	);
	
	/**return(
			  <NavigationContainer>
  		
			<Stack.Navigator screenOptions={{headerShown: false}}>
       		<Stack.Screen
					name="MainPage"
         		   component={MainPage}
       		/>
       		<Stack.Screen 
			   	name="QuizPage" 
				   component={QuizPage} 
				/>
				<Stack.Screen 
			   	name="FinishQuizPage" 
				   component={FinishQuizPage} 
				/>
  		</Stack.Navigator>
		  <StatusBar style="hidden" />
		
	   </NavigationContainer>
	);*/
};

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	width: '100%',
  	backgroundColor: color.body,
  	justifyContent: 'center'
  },
  body: {
  	flex: 4.5,
  	justifyContent: 'center'
  },
  footer: {
    flex: 0.4,
    flexDirection: 'row',
	backgroundColor: color.transparent,
	width: '100%',
	justifyContent: 'center',
  },
  nav: {
    flex: 1,
    color: color.white,
	textAlign: 'center',
	justifyContent: 'center',
  }
});

export default MainPage;