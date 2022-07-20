import * as firebase from 'firebase'
import settings from './setting'

const firebaseApp = firebase.initializeApp(settings)

export const db = firebaseApp.database()

export default firebaseApp
