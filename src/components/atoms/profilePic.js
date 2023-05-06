import { View, StyleSheet, Image } from 'react-native';

import { color } from '../../utils/color';


export const ProfilePic = ({src}) => {

	return(
		<View style={styles.container}>
            <Image src={src} alt='image' />
		</View>
	)
};


const styles = StyleSheet.create({
  container: {
	  backgroundColor: color.head,
	  borderRadius: 8,
	  width: 200,
	  height: 200,
	  
  },
  
});
