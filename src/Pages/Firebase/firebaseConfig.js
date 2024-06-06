import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDo4LhqdLOGZHPWZ5M9RRzz3GixxjWhMSk',
    authDomain: 'practice-website-test-7e778.firebaseapp.com',
    projectId: 'practice-website-test-7e778',
    storageBucket: 'practice-website-test-7e778.appspot.com',
    messagingSenderId: '607938130980',
    appId: '607938130980:web:616d34b8efa93a83ded4b1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
