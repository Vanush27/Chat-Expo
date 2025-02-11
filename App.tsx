import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	AddToChatScreen,
	ChatScreen,
	EmojiScreen,
	HomeScreen,
	LoginScreen,
	ProfileScreen,
	SignUpScreen,
	SplashScreen,
} from '@screens';
import { Provider } from 'react-redux';
import Store from 'src/context/store';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Provider store={Store}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="SplashScreen" component={SplashScreen} />
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
					<Stack.Screen name="HomeScreen" component={HomeScreen} />

					<Stack.Screen name="AddToChatScreen" component={AddToChatScreen} />
					<Stack.Screen name="ChatScreen" component={ChatScreen} />
					<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
					<Stack.Screen name="EmojiScreen" component={EmojiScreen} />
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
}
