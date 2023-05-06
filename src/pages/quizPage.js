import { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import HeadingBox from '../components/heading-box';
import OptionBox from '../components/option-box';
import QuestionBox from '../components/question-box';
import { question } from '../question/question';

import { ScoreContext } from '../contexts/data.context';

import { color } from '../utils/color';

const failedQuestion = [];

const QuizPage = ({navigation}) => {
	const [ buttonDisabled, setButtonDisabled ] = useState(true);
	const [ buttonBackground, setButtonBackground ] = useState(color.transB);
	const [ picked, setPicked ] = useState(null);
    const [ questionIndex, setQuestionIndex ] = useState(0);
    const [ currentProgress, setCurrentProgress ] = useState(0);
    
    const { currentScore, setCurrentScore } = useContext(ScoreContext);
  
    const pickAnswerNext = () => {
    	if(picked === question[0][questionIndex][2]) {
  	 	setTimeout(() => setCurrentScore(currentScore + 1), 500)
  	  } else {
  		 failedQuestion.push(question[0][questionIndex]);
  	//	 alert(failedQuestion)
  	  }
  
		if(questionIndex >= question[0].length - 1) {
			//question[0].length = 0;
			//failedQuestion.map((failed) => question[0].push(failed) )
			//alert(question[0])
   	 	return navigation.navigate('FinishQuizPage');
        }
  
  	  setQuestionIndex(questionIndex + 1);
    }
  
    const checkAnswer = (answer) => {
   	if(answer !== null) {
  		setPicked(answer);
   	   setButtonDisabled(false);
		  setButtonBackground(color.active);
	  }
    }
    
    const cancel = () => {
		navigation.navigate('HomeStack');
	}
  
   useEffect (() => {
  	setButtonDisabled(true);
  	setCurrentProgress((1 / question[0].length) * (questionIndex));
  	setButtonBackground(color.transB);
   },[questionIndex]);
  
  return (
     <>
   	   <HeadingBox 
   		   title='Genesis'
		  	clickIcon={<Text>cancel</Text>}
			  doThis={cancel}
		  />
   	   <View style={styles.main}>
   			<ProgressBar progress={currentProgress} color={color.active} />
   		   <QuestionBox level={0} questionNo={questionIndex} />
      		<OptionBox 
			  	level={0} 
				  questionNo={questionIndex}
				  checkAnswer={checkAnswer}
			  />
          </View>
          <View style={styles.footer}>
          	<Button 
					mode='contained' 
					disabled={buttonDisabled} 
					onPress={pickAnswerNext}
					style={[
						styles.submit,{backgroundColor: buttonBackground 
				}]}>SUBMIT</Button>
          </View>
     </>  
  );
}

const styles = StyleSheet.create({
  main: {
  	flex: 5,
  	width: '100%',
  	backgroundColor: color.body
  },
  footer: {
  	flex: 1,
  	width: '100%',
  	backgroundColor: color.body,
  	justifyContent: 'center',
  },
  submit: {
  	color: 'white',
 	 width: '70%',
 	 height: 45 ,
 	 justifyContent: 'center',
 	 alignSelf: 'center',
  }
});


export default QuizPage;