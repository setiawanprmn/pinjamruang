// firebase-config.js
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Fungsi update untuk ruangan
  function saveRoomToDB(roomData) {
    db.collection('rooms').doc(roomData.id).set(roomData);
  }
  
  // Fungsi get untuk profil
  function getProfile(userId) {
    return db.collection('users').doc(userId).get();
  }