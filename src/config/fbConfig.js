import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyD_-OPH_whLKCGbWkibUc9ZozuBu1WUt1E",
	authDomain: "test-87a57.firebaseapp.com",
	databaseURL: "https://test-87a57-default-rtdb.firebaseio.com",
	projectId: "test-87a57",
	storageBucket: "test-87a57.appspot.com",
	messagingSenderId: "362651830380",
	appId: "1:362651830380:web:31bb800f9677edfe7ff049"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
