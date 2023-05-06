import { View, Text, StyleSheet } from 'react-native';

import { color } from '../../utils/color';


export const MenuOption = ({action, title}) => {

	return(
		<View 
			style={styles.container}
			onStartShouldSetResponder={action}>
			<Text style={styles.option}>icon</Text>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
};


const styles = StyleSheet.create({
  container: {
	  backgroundColor: color.head,
	  borderRadius: 8,
	  width: 120,
	  height: 120,
	  //padding: 4,
	  //marginBottom: 40,
	//  flexDirection: 'row',
  },
  option: {
  	color: 'green',
  },
  title: { 
  	fontSize: 20 ,
  	width: '90%',
  	height: 'auto',
  	alignSelf: 'center',
  	paddingLeft: 2
  //	fontSize: 20,
      
  }
});
