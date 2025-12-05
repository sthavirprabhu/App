import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	Image,
	TextInput,
	Alert,
	TouchableOpacity,
	Text,
} from 'react-native';

// import the getAuth and  signInWithEmailAndPassword from  firebase/auth

import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import firebase from 'firebase'

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


const appIcon = require('../assets/Logo.png');

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			fontsLoaded: false,
			userSignedIn: false,
		};
	}

	signIn = async (email, password) => {
		/* write the code to authenticate user using email and password. */
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      this.props.navigation.navigate('HomeScreen')
    })
    .catch((error)=>{
      alert(error.message)
    })
	};

	render() {
			SplashScreen.hideAsync();
			const { email, password } = this.state;

			return (
				<View style={styles.container}>
					<SafeAreaView style={styles.droidSafeArea} />

					<Text style={styles.appTitleText}>Gamified App</Text>
					<Image source={appIcon} style={styles.appIcon} />

					<TextInput
						style={styles.textinput}
						onChangeText={(text) => this.setState({ email: text })}
						placeholder={'Enter Email'}
						placeholderTextColor={'#F7F7F7'}
						autoFocus
					/>
					<TextInput
						style={[styles.textinput, { marginTop: 20 }]}
						onChangeText={(text) => this.setState({ password: text })}
						placeholder={'Enter Password'}
						placeholderTextColor={'#f7f7f7'}
						secureTextEntry
					/>
          <Text></Text>
					<TouchableOpacity 
          onPress={()=>{this.signIn(email, password)}}
          style={[styles.button, { marginTop: 20 }]}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>{this.props.navigation.navigate('RegisterScreen')}}
          style={[styles.button, { marginTop: 20 }]}>
						<Text style={styles.buttonText}>Register Now!</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#302e2b',
		alignItems: 'center',
		justifyContent: 'center',
	},
	droidSafeArea: {
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
	},
	appIcon: {
		width: RFValue(200),
		height: RFValue(200),
		resizeMode: 'contain',
		marginBottom: RFValue(20),
	},
	appTitleText: {
		color: '#F7F7F7',
		textAlign: 'center',
		fontSize: RFValue(40),
		fontFamily: 'bold',
		marginBottom: RFValue(20), 
	},
	textinput: {
		width: RFValue(250),
		height: RFValue(50),
		padding: RFValue(10),
		borderColor: '#f7f7f7',
		borderWidth: RFValue(4),
		borderRadius: RFValue(10),
		fontSize: RFValue(20),
		color: '#f7f7f7',
		backgroundColor: '#000000',
		fontFamily: 'Bubblegum-Sans',
	},
	button: {
		width: RFValue(250),
		height: RFValue(50),
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: RFValue(30),
		backgroundColor: 'white',
		marginBottom: RFValue(20),
    borderColor: 'maroon'
	},
	buttonText: {
		fontSize: RFValue(20),
		color: '#00000',
		fontFamily: 'San-Fransisco',
	},
	buttonTextNewUser: {
		fontSize: RFValue(12),
		color: '#FFFFFF',
		fontFamily: 'Bubblegum-Sans',
		textDecorationLine: 'underline',
	},
});