import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwGCoxNwN63GntOZeL_s3GAa_Df5e7UNE",
  authDomain: "softwrap-skill-test.firebaseapp.com",
  projectId: "softwrap-skill-test",
  storageBucket: "softwrap-skill-test.appspot.com",
  messagingSenderId: "954643008982",
  appId: "1:954643008982:web:3d9980323475b54d922877"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;