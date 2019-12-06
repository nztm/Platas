import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
