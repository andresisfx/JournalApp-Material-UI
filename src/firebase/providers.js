import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

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