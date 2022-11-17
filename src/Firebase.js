import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const config = {
    apiKey: "AIzaSyDvcSL-RPBKhVRbxoYAwTxZhSMwhSAH0K4",
    authDomain: "kvam-e-sport.firebaseapp.com",
    projectId: "kvam-e-sport",
    storageBucket: "kvam-e-sport.appspot.com",
    messagingSenderId: "677296006230",
    appId: "1:677296006230:web:19015e5496740617ab87f7",
    measurementId: "G-KCCSKH771D"
}

const app = initializeApp(config)
const db = getFirestore()
const storage = getStorage()

export { db, app, storage }