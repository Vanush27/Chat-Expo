import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EmojiPicker, { tr } from 'rn-emoji-keyboard';
import { EmojiType } from 'rn-emoji-keyboard/lib/typescript/src/types';

const EmojiScreen = () => {
	const [state, setState] = useState<any>();

	const [isOpen, setIsOpen] = React.useState<boolean>(true);

	const handleSelect = (emojiObject: EmojiType) => {
		console.log(emojiObject);
		/* example emojiObject = { 
        "emoji": "❤️",
        "name": "red heart",
        "slug": "red_heart",
      }
    */
	};

	const navigation = useNavigation();
	return (
		<SafeAreaView className="flex-1 " style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()} className="flex-row items-center">
				<MaterialIcons name="chevron-left" size={32} color={'#fbfbfb'} />
				<Text>Please select the emoji you would like to use</Text>
			</TouchableOpacity>
			<View style={styles.display}>
				<Text style={{ fontSize: 64, backgroundColor: 'transparent' }}>{state}</Text>
			</View>
			<EmojiPicker onEmojiSelected={handleSelect} open={isOpen} onClose={() => setIsOpen(true)} />

			{/* <EmojiSelector
				onEmojiSelected={(emoji) => setState(emoji)}
				showSearchBar={true}
				showTabs={true}
				showHistory={true}
				showSectionTitles={true}
				category={Categories.all}
			/> */}
		</SafeAreaView>
	);
};
export default EmojiScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
	display: {
		width: 86,
		height: 86,
		margin: 24,
		borderWidth: 2,
		borderRadius: 12,
		borderColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
