import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseBD } from "../../firebase/config";


export const startNewNote = () => {
    return async(dispatch, getState) => {
        
        const {uid} = getState().authStore;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        };
        
        const newDoc = doc(collection( firebaseBD, `${uid}/journal/notes`));
        const setDocResponse = await setDoc(newDoc, newNote);
        console.log({setDocResponse, newDoc});
    }
}