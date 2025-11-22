
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrMgrKVoRrmvao4QSy-3-T896n6VFNNDQ",
  authDomain: "mi-app-holi.firebaseapp.com",
  projectId: "mi-app-holi",
  storageBucket: "mi-app-holi.firebasestorage.app",
  messagingSenderId: "511502008091",
  appId: "1:511502008091:web:81f58b34becc38e82f9dbe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
