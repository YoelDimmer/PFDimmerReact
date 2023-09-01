import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJLj8VqBlQmvLC9OqYAr_lFGd9Sfz7KfA",
  authDomain: "heycats-7efa0.firebaseapp.com",
  projectId: "heycats-7efa0",
  storageBucket: "heycats-7efa0.appspot.com",
  messagingSenderId: "800695705477",
  appId: "1:800695705477:web:3579e3d25431e12230aeec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
