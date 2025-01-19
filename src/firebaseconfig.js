import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWiuwDwvjjqBxXRu2z2ydWE-X4Cx-CIo8",
    authDomain: "portafolioweb-4cfda.firebaseapp.com",
    projectId: "portafolioweb-4cfda",
    storageBucket: "portafolioweb-4cfda.firebasestorage.com",
    messagingSenderId: "371609158418",
    appId: "1:371609158418:web:9f2f0162939f781ceba9cb",
    measurementId: "G-3Y3K2V2TKC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Inicializar Auth

export { auth };