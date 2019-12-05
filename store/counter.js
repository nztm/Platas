import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const countsRef = db.collection('counts').doc('data')

export const state = () => ({
  counter: ''
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('counter', countsRef)
  }),
  increment: firestoreAction(() => {
    countsRef.update({
      count: firebase.firestore.FieldValue.increment(1)
    })
  })
}
