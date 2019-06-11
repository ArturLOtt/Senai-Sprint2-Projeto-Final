import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBR_HhIEdWAUCNjyxEBzLmfr7WwURzsPuI",
  authDomain: "pronto-para-conectar.firebaseapp.com",
  databaseURL: "https://pronto-para-conectar.firebaseio.com",
  projectId: "pronto-para-conectar",
  storageBucket: "pronto-para-conectar.appspot.com",
  messagingSenderId: "628889803012",
  appId: "1:628889803012:web:d358ef0491cecb2b"
};


firebase.initializeApp(config);

// const auth = firebase.initializeApp(firebaseConfig);

export default config;
