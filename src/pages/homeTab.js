import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { useContext } from 'react';
import { ScoreContext } from '../contexts/data.context';
import HeadingBox from '../components/heading-box';

import { color } from '../utils/color';
import { StatusBar } from 'expo-status-bar';

const HomeTab = ({navigation}) => {
	const { currentScore, setCurrentScore } = useContext(ScoreContext);
	
	const start = () => {
		setCurrentScore(0);
		navigation.navigate('QuizPage');
	}
	
	return(
		<SafeAreaView style={styles.container}>
			{/* <HeadingBox 
				title='BIBLE STUDY'
				clickIcon={<Text>click me</Text>}
			/> */}
            <View style={styles.body}>
            	<Button onPress={start}>Click</Button>
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

export default HomeTab;