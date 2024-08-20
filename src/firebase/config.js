import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5PRMgNx5Uuwe1rfg1EuF-yTp7GgCbRHM",
  authDomain: "miniblog-dccdd.firebaseapp.com",
  projectId: "miniblog-dccdd",
  storageBucket: "miniblog-dccdd.appspot.com",
  messagingSenderId: "718927992380",
  appId: "1:718927992380:web:2732df39d8d1e84a4a5539"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);