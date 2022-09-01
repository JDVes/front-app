// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";



// import firebase from firebase/app;
// import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
// import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDdW2jkVUbPEANBCqJ_yKkvwytnDbIbj4M",
//   authDomain: "company-authentification.firebaseapp.com",
//   projectId: "company-authentification",
//   storageBucket: "company-authentification.appspot.com",
//   messagingSenderId: "119812371999",
//   appId: "1:119812371999:web:0436e8c30d3a36aaadc72a",
//   measurementId: "G-0MZYJJBCHV"
// };

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// firebase.initializeApp(firebaseConfig);
// const db = getFirestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt : 'select_account' });

// export const auth = firebase.auth();

// User Registration

// const userRegistration = async (name, email, password) => {
//     try {
//       const res = await auth.createUserWithEmailAndPassword(email, password);
//       const user = res.user;
//       await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//     } catch (err) {
//       alert(err.message);
//     }
//   };

  // Sign-in with Email/Password

 

// const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//   const auth = getAuth();

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

//   const auth = getAuth();

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
    // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// export const signInWithEmailAndPassword = async (email, password) => {
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // Google Sign-in
// export const signInWithGoogle = async () => {
//     try {
//       const res = await auth.signInWithPopup(provider);
//       const user = res.user;
//       const userRef = collection(db, "users");
//       const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
//       if (result.empty) {
//         await addDoc(collection(db, "users"), {
//           uid: user.uid,
//           name: user.displayName,
//           authProvider: "google",
//           email: user.email,
//         });
//       }
//     } 
//     catch (err) {
//       alert(err.message);
//     }
//   };

//     Observateur d'authentification

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    //   const uid = user.uid;
      // ...
    // } else {
      // User is signed out
      // ...
//     }
//   });


//   reset password

//   export const resetPassword = async (email) => {
//     try {
//       await auth.sendPasswordResetEmail(email);
//     } catch (err) {
//       alert(err.message);
//     }
//   };
  


  


  



// export default firebase;



// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";



// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyDdW2jkVUbPEANBCqJ_yKkvwytnDbIbj4M",
//       authDomain: "company-authentification.firebaseapp.com",
//       projectId: "company-authentification",
//       storageBucket: "company-authentification.appspot.com",
//       messagingSenderId: "119812371999",
//       appId: "1:119812371999:web:0436e8c30d3a36aaadc72a",
//       measurementId: "G-0MZYJJBCHV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// //  resgiter users

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// //   connexion utilisateur existant

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// //    observateur d'authentification

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });




// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDdW2jkVUbPEANBCqJ_yKkvwytnDbIbj4M",
  authDomain: "company-authentification.firebaseapp.com",
  projectId: "company-authentification",
  storageBucket: "company-authentification.appspot.com",
  messagingSenderId: "119812371999",
  appId: "1:119812371999:web:0436e8c30d3a36aaadc72a",
  measurementId: "G-0MZYJJBCHV"
};

// Initialize Firebase

 const app = initializeApp(firebaseConfig);


 export default app