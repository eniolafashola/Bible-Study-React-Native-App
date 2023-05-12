import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
			<StatusBar
			 style='auto'
			 backgroundColor={color.head} 
			/>
		</SafeAreaView>
	);
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