import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	apiKey: "AIzaSyA-ldh3eorm73QDYEHIfDEt8SmTnjsbuX4",
	authDomain: "facebook-messenger-clone-1d076.firebaseapp.com",
	databaseURL: "https://facebook-messenger-clone-1d076.firebaseio.com",
	projectId: "facebook-messenger-clone-1d076",
	storageBucket: "facebook-messenger-clone-1d076.appspot.com",
	messagingSenderId: "1061130323362",
	appId: "1:1061130323362:web:87e86c38229f0ddcc5defb",
	measurementId: "G-YQ75LWG15Y",
});

const db = firebaseApp.firestore();

export default db;
