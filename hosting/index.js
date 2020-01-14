const firebaseConfig = {
  apiKey: "AIzaSyD372hF2u5R6Lk0x6SlN6pNlwS1o6NdNQc",
  authDomain: "snapdeal-bcafd.firebaseapp.com",
  databaseURL: "https://snapdeal-bcafd.firebaseio.com",
  projectId: "snapdeal-bcafd",
  storageBucket: "snapdeal-bcafd.appspot.com",
  messagingSenderId: "414865392784",
  appId: "1:414865392784:web:4157813e4f819877c84415",
  measurementId: "G-HHSB3R47NK"
};

const runAsync = async () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const result = await firebase.auth().signInWithPopup(provider);
  console.log(result);
  
  var db = firebase.firestore();
  await db.collection("cities").add({
      name: "Tokyo",
      country: "Japan"
  });
  
  db.collection("cities")
    .onSnapshot(function (response) {
      console.log(response);
      console.log(response.docs.map(i => i.data()));
    });
};

const chatService = {};
  
runAsync()
.catch(console.error);