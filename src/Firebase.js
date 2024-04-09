import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const config = {
    
}

const app = initializeApp(config)
const db = getFirestore()
const storage = getStorage()
const auth = getAuth()

export { db, app, storage, auth }
