import { initializeApp } from "firebase/app";
const firebaseConfig = {
	apiKey: "AIzaSyB9nCVQsEzp5s_FjgvBRVHh90CCRGvxY4c",
	authDomain: "chat-ac983.firebaseapp.com",
	projectId: "chat-ac983",
	storageBucket: "chat-ac983.appspot.com",
	messagingSenderId: "751259258650",
	appId: "1:751259258650:web:aea07576a906983b7266a3",
};

const app = initializeApp(firebaseConfig);

export {app}