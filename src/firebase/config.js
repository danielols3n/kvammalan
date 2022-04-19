import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyBGqc9rtrxJ7l065uyqjX5guJ4Mwr_QZ-I",
    authDomain: "kvammalan-9127b.firebaseapp.com",
    projectId: "kvammalan-9127b",
    storageBucket: "kvammalan-9127b.appspot.com",
    messagingSenderId: "563261010836",
    appId: "1:563261010836:web:76cffd1c850a22e37a9581",
    measurementId: "G-GF756DXMN6"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app)

export { db, auth, storage, analytics }