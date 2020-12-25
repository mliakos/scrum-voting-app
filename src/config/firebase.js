import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDugZBp5jARwwqtb-NVJo5zlXe7IYY6LOY",
	authDomain: "scrum-voting-app-7fa10.firebaseapp.com",
	databaseURL: "https://scrum-voting-app-7fa10-default-rtdb.firebaseio.com",
	projectId: "scrum-voting-app-7fa10",
	storageBucket: "scrum-voting-app-7fa10.appspot.com",
	messagingSenderId: "21017286243",
	appId: "1:21017286243:web:811a26bf4629514fb90a56",
	measurementId: "G-T63DD0E6R3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.database();
