import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIqAEr9z1fP_EmtxTkCCdwoy0JnPK4BtE",
  authDomain: "tarefa-sj.firebaseapp.com",
  projectId: "tarefa-sj",
  storageBucket: "tarefa-sj.appspot.com",
  messagingSenderId: "1042264579112",
  appId: "1:1042264579112:web:8c79135f2f3f482380291d",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
