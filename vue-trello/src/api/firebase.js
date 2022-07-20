import * as app from 'firebase/app'
import settings from './setting'

const firebaseApp = app.initializeApp(settings)

export const db = firebaseApp.database()

export default firebaseApp
