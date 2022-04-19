import { db, auth, storage } from './config.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential)
        return userCredential
    }).catch((error) => {
        console.error(error)
        return error
    })
}
