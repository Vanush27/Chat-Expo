import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Logo } from 'assets';
import { firestoreDB } from 'firebase.config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { TouchableOpacity, Image, View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
	const user = useSelector((state: any) => state.user.user);

	const [isLoading, setIsLoading] = useState(true);
	const [chats, setChats] = useState<any>(null);
	const navigation = useNavigation<any>();

	useLayoutEffect(() => {
		const chatQuery = query(collection(firestoreDB, 'chats'), orderBy('_id', 'desc'));

		const unsubscribe = onSnapshot(chatQuery, (querySnapShot) => {
			const chatRooms: any = querySnapShot.docs.map((doc) => doc.data());
			setChats(chatRooms);
			setIsLoading(false);
		});

		//  Return the unsubscribe funciton to stop listening to the updates
		return unsubscribe;
	}, []);

	return (
		<View className="flex-1">
			<SafeAreaView>
				<View className="w-full flex-row items-center justify-between px-4 py-2">
					<Image source={Logo} className="w-12 h-12" resizeMode="contain" />

					<TouchableOpacity
						onPress={() => navigation.navigate('ProfileScreen')}
						className="w-12 h-12 rounded-full border border-primary flex items-center justify-center"
					>
						<Image source={{ uri: user?.profilePic }} className="w-full h-full" resizeMode="cover" />
					</TouchableOpacity>
				</View>

				{/* scrolling area */}
				<ScrollView className="w-full px-4 pt-4">
					<View className="w-full">
						{/* meesages title */}
						<View className="w-full flex-row items-center justify-between px-2">
							<Text className="text-primaryText text-base font-extrabold pb-2">Messages</Text>

							<TouchableOpacity onPress={() => navigation.navigate('AddToChatScreen')}>
								<Ionicons name="chatbox" size={28} color="#555" />
							</TouchableOpacity>
						</View>

						{isLoading ? (
							<>
								<View className="w-full flex items-center justify-center">
									<ActivityIndicator size={'large'} color={'#43C651'} />
								</View>
							</>
						) : (
							<>
								{chats && chats?.length > 0 ? (
									<>
										{chats?.map((room: any) => (
											<MessageCard key={room._id} room={room} />
										))}
									</>
								) : (
									<></>
								)}
							</>
						)}
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

const MessageCard = ({ room }: any) => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('ChatScreen', { room: room })}
			className="w-full flex-row items-center justify-start py-2"
		>
			{/* images */}
			<View className="w-16 h-16 rounded-full flex items-center border-2 border-primary p-1 justify-center">
				<FontAwesome5 name="users" size={24} color="#555" />
			</View>

			{/* content */}
			<View className="flex-1 flex items-start justify-center ml-4">
				<Text className="text-[#333] text-base font-semibold capitalize">{room.chatName}</Text>

				<Text className="text-primaryText text-sm">
					Lorem ipsum dolor sit amet consec tetur adipis adip isicing icing elit....
				</Text>
			</View>

			{/* time text */}
			<Text className="text-primary px-4 text-base font-semibold">27 min</Text>
		</TouchableOpacity>
	);
};

export default HomeScreen;
