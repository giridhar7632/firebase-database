import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAcg8MxG_x2YiTyV2fAoH9tuyHUn85JqNQ",
  authDomain: "test-form-f2df9.firebaseapp.com",
  databaseURL: "https://test-form-f2df9.firebaseio.com",
  projectId: "test-form-f2df9",
  storageBucket: "test-form-f2df9.appspot.com",
  messagingSenderId: "684444083467",
  appId: "1:684444083467:web:7fff9d88d6acc37b42ae0e",
  measurementId: "G-YV81RWDHS5"
};

var fireBase = firebase.initializeApp(firebaseConfig)
export default fireBase