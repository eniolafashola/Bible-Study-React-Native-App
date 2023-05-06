import { View, Text, StyleSheet } from 'react-native';

import { icon } from '"../../../assets/icon.png';

import { ProfilePic } from '../components/atoms/profilePic';

import { color } from '../utils/color';

const Profile = () => {
	
	return(
		 <View style={styles.container}>
			<View style={styles.top}>
				<ProfilePic src={icon} />
			</View>
			<Text>Na the profile page be this</Text>
			<Text>Shotiyee</Text>
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
  top: {
	marginTop: '25%',
	marginBottom: '20%'
  }
  
});

export default Profile;