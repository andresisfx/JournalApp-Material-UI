import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./config";
import { Try } from "@mui/icons-material";


const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleAuthProvider);
        // The signed-in user info.
        const { displayName, email, photoURL, uid } = result.user;

        return {
             ok: true,
              displayName, 
              email,
              photoURL, 
              uid 
            };

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return {
            ok: false,
            errorMessage
        };
    }

}

export const registerUserWithEmailPasswordProvider = async ({email,password,displayName}) => {

    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        

        await updateProfile(firebaseAuth.currentUser,{ displayName });

        

        return {
            ok: true,
            uid, photoURL, email, displayName
        };

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
    }

}

export const loginWithEmailPasswordProvider = async ({email,password}) => {
    
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { ok,uid, photoURL, displayName } = resp.user;


        return {
            ok: true,
            uid, photoURL, displayName, email
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
        
    }
}

export const logoutFirebase = async () => {
    return await firebaseAuth.signOut();
}