import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.NEXT_PUBLIC_APPID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

getAnalytics(app);

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
