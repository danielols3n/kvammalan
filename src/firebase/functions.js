import { db, auth, storage } from './config.js'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        window.location.href = '/opprett-hending'
        return userCredential
    }).catch((error) => {
        console.error(error)
        return error
    })
}

export const signOutUser = () => {
    signOut(auth).then(() => {
        console.log('Success')
    }).catch((error) => {
        console.error(error)
        return error
    })
}
