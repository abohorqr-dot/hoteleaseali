// docs/firebase-init.js  (SIN <script> tags)
const firebaseConfig = {
  apiKey: "AIzaSyAnjcmz2VPiTDh4YNROD6gjc5_HBuS2jWQ",
  authDomain: "hoteleaseali.firebaseapp.com",
  projectId: "hoteleaseali",
  storageBucket: "hoteleaseali.appspot.com", // ver nota abajo
  messagingSenderId: "518561334084",
  appId: "1:518561334084:web:35c95b482e25afb7a30d11",
  measurementId: "G-84KL2MHP1J"
};

if (!window._firebaseAppInitialized) {
  firebase.initializeApp(firebaseConfig); // compat
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  window._firebaseAppInitialized = true;
}
