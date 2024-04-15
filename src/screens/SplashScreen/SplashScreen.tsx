import { View, Text, Image, ActivityIndicator } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Logo } from 'assets';
import { firebaseAuth, firestoreDB } from 'firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { SET_USER } from 'src/context/actions/userActions';

const SplashScreen = () => {
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	const checkLoggedUser = async () => {
		firebaseAuth.onAuthStateChanged((userCred) => {
			if (userCred?.uid) {
				getDoc(doc(firestoreDB, 'users', userCred?.uid))
					.then((docSnap) => {
						if (docSnap.exists()) {
							dispatch(SET_USER(docSnap.data()));
						}
					})
					.then(() => {
						setTimeout(() => {
							navigation.navigate('HomeScreen');
						}, 2000);
					});
			} else {
				navigation.replace('LoginScreen');
			}
		});
	};

	useLayoutEffect(() => {
		checkLoggedUser();
	}, []);
	return (
		<View className="flex-1 items-center justify-center space-y-24">
			<Image source={Logo} className="w-24 h-24" resizeMode="contain" />
			<ActivityIndicator size={'large'} color={'#43C651'} />
		</View>
	);
};

export default SplashScreen;
