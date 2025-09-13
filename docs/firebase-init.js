// docs/firebase-init.js  — Inicializa Firebase en el navegador (sin bundler)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics }   from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnjcmz2VPiTDh4YNROD6gjc5_HBuS2jWQ",
  authDomain: "hoteleaseali.firebaseapp.com",
  projectId: "hoteleaseali",
  storageBucket: "hoteleaseali.firebasestorage.app",
  messagingSenderId: "518561334084",
  appId: "1:518561334084:web:35c95b482e25afb7a30d11",
  measurementId: "G-84KL2MHP1J"
};

// Inicializa
export const app  = initializeApp(firebaseConfig);

// Analytics es opcional (en localhost puede no iniciar y no pasa nada)
export let analytics = null;
try { analytics = getAnalytics(app); } catch (e) { /* ignorar en local */ }

// Auth lo usaremos luego
export const auth = getAuth(app);

// Comprobación
console.log("✅ Firebase listo:", app.name);
