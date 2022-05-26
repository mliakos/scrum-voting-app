import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "scrum-voting-app-7fa10.firebaseapp.com",
	databaseURL: "https://scrum-voting-app-7fa10-default-rtdb.firebaseio.com",
	projectId: "scrum-voting-app-7fa10",
	storageBucket: "scrum-voting-app-7fa10.appspot.com",
	messagingSenderId: "21017286243",
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.database();
