
import { registerUserWithEmailPasswordProvider, signInWithGoogle, loginWithEmailPasswordProvider, logoutFirebase } from "../../firebase/providers";
import { login, logout,  checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
       const {ok, errorMessage, uid,photoURL} = await registerUserWithEmailPasswordProvider({email, password, displayName});
       if(!ok) return dispatch(logout({errorMessage}));
       dispatch(login({uid, displayName, email, photoURL}));
    }
}

export const startLoginWithEmailAndPassword =({email, password})=>{

    return  async(dispatch)=>{
        dispatch(checkingCredentials());

        const result = await loginWithEmailPasswordProvider({email, password});
        console.log(result);

        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));

    }

}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(logout({}));
    }
}