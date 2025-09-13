// Inicializa Firebase (CDN módulos v10)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnjcmz2VPiTDh4YNR0D6gjc5_HBuS2jWQ",
  authDomain: "hoteleaseali.firebaseapp.com",
  projectId: "hoteleaseali",
  storageBucket: "hoteleaseali.firebasestorage.app",
  messagingSenderId: "518561334084",
  appId: "1:518561334084:web:35c95b482e25afb7a30d11",
  measurementId: "G-84KL2MHP1J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "es";
