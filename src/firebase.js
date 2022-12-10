import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
        // Firebase credentials
       apiKey: "AIzaSyAv0uzAGBYK1lI6gGHO0kPrAt07f-Cr5cA",
      authDomain: "todolist-b1ace.firebaseapp.com",
      databaseURL: "https://todolist-b1ace-default-rtdb.firebaseio.com",
      projectId: "todolist-b1ace",
      storageBucket: "todolist-b1ace.appspot.com",
      messagingSenderId: "81033923681",
      appId: "1:81033923681:web:bf2cb21ae96c0111866e20"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const db = getDatabase(app)

