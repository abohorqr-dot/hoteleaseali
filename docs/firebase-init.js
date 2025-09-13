<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAnjcmz2VPiTDh4YNROD6gjc5_HBuS2jWQ",
    authDomain: "hoteleaseali.firebaseapp.com",
    projectId: "hoteleaseali",
    storageBucket: "hoteleaseali.firebasestorage.app",
    messagingSenderId: "518561334084",
    appId: "1:518561334084:web:35c95b482e25afb7a30d11",
    measurementId: "G-84KL2MHP1J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
