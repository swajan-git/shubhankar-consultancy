import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "./firebase-config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
//   firebase
//     .firestore()
//     .enablePersistence()
//     .catch((err) => {
//         if (err.code === "failed-precondition") {
//             console.log(err);
//         } else console.log(err);
//     });

export default firebase;
export const fireStoreDB = firebase.firestore();
export const fireDatabase = firebase.database();

// export const fireStoreDB = fireApp.firestore();
// export const fireDatabase = fireApp.database();

export const blogsCollectionRef = fireStoreDB.collection("blogs");
export const insightsCollectionRef = fireStoreDB.collection("insights");
export const newsCollectionRef = fireStoreDB.collection("news");
export const caseCollectionRef = fireStoreDB.collection("caseStudies");

export const websiteDataRef = fireStoreDB.collection("data");
export const onlineTutorialsCollection = fireStoreDB.collection('onlineTutorials');
export const researchesCollectionRef = fireStoreDB.collection('researches');

export const userInfoCollectionRef = fireStoreDB
  .collection("users");

export const writersCollectionRef = fireStoreDB.collection("writers");