import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import  me from '../../assets/me2.jpg';

import { color } from '../utils/color';

const Profile = () => {
	
	return(
		 <View style={styles.container}>
			<View style={styles.profileHeader}>
				<Avatar.Image size={120} source={me} />
				<Text style={styles.userName}>Eniola Fashola</Text>
			</View>
			<View style={styles.profileInfoBox}>
				<Text>Na the profile page be this</Text>
				<Text>Shotiyee</Text>
			</View>
			
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	width: '100%',
  	backgroundColor: color.body,
  	// justifyContent: 'center',
  	alignItems: 'center'
  },
  profileHeader: {
	flex: 1,
	marginTop: 50,
	width: '100%',
	alignItems: 'center',
	justifyContent: 'space-around',
  },
  userName: {
	fontSize: 25,
	fontWeight: 'bold',

  },
  profileInfoBox: {
	flex: 2,
  }
  
});

export default Profile;