import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

let uid = ''
const db = firebase.firestore()
const userRef = db.collection('users')

export const actions = {
  getUser: firebase.auth().onAuthStateChanged(user => {
    uid = user.uid
  }),
  setDate: firestoreAction(() => {
    userRef.doc(uid).set({
      lastDate: new Date()
    })
  })
}
