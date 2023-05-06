import { useEffect } from 'react';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { useContext } from 'react';
import { ScoreContext } from '../contexts/data.context';

import { question } from '../question/question';

import { color } from '../utils/color';

const FinishQuizPage = ({navigation}) => {
	const { currentScore } = useContext(ScoreContext);
	
	const contToStart = () => {
		navigation.navigate('HomeStack');
	}
	
	useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => contToStart()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
	
	const percent = Math.round((currentScore/question[0].length) * 100);
	
	return(
		<View style={styles.container}>
			<View style={styles.scoreboard}>
				<Text style={styles.score}>{percent}%</Text>
				<Text style={styles.comment}>You scored {currentScore} out of {question[0].length}</Text>
				<Button 
					mode='contained' 
					onPress={contToStart}
					style={styles.but}>CONTINUE</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	width: '100%',
  	backgroundColor: color.body,
  	justifyContent: 'center'
  },
  scoreboard: {
  	flex: 0.6,
  	backgroundColor: color.white,
  	width: '80%',
  	alignSelf: 'center',
  	borderRadius: 10,
  	justifyContent: 'center'
  },
  score: {
  	color: color.head,
  	fontSize: 100,
  	textAlign: 'center'
  },
  comment: {
  	color: color.body,
  	fontSize: 30,
  	textAlign: 'center',
  
  },
  but: {
  	backgroundColor: color.body,
  	width: '70%',
  	height: 40,
  	alignSelf: 'center',
  	justifyContent: 'center',
  	marginTop: 70
  }
});

export default FinishQuizPage;