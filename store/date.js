import { firestoreAction } from 'vuexfire'
import dayjs from 'dayjs'
import firebase from '~/plugins/firebase'

let uid = ''
const db = firebase.firestore()
const userRef = db.collection('users')

export const state = () => ({
  lastDate: ''
})

export const actions = {
  getUser() {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        uid = user.uid
        resolve()
      })
    })
  },
  getDate: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('lastDate', userRef.doc(uid))
  }),
  setDate: firestoreAction(() => {
    userRef.doc(uid).set({
      lastDate: dayjs().format('YYYY-MM-DD')
    })
  })
}
