import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyDvcSL-RPBKhVRbxoYAwTxZhSMwhSAH0K4",
    authDomain: "kvam-e-sport.firebaseapp.com",
    projectId: "kvam-e-sport",
    storageBucket: "kvam-e-sport.appspot.com",
    messagingSenderId: "677296006230",
    appId: "1:677296006230:web:19015e5496740617ab87f7",
    measurementId: "G-KCCSKH771D"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app)

export { db, auth, storage, analytics }