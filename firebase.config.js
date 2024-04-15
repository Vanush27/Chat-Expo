import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDYQEnd8n2-yq_c62eVRA-hOkMpyFlw1c4',
	authDomain: 'chats-clone-b0e51.firebaseapp.com',
	databaseURL: 'https://chats-clone-b0e51-default-rtdb.firebaseio.com',
	projectId: 'chats-clone-b0e51',
	storageBucket: 'chats-clone-b0e51.appspot.com',
	messagingSenderId: '435078895023',
	appId: '1:435078895023:web:e05c69f79e1778e7b1cb5a',
};

const app = initializeApp(firebaseConfig);
// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
