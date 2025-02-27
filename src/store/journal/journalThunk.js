import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseBD } from "../../firebase/config";
import { addNewEmptyNote, setActivatedNote } from "./journalSlice";


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

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActivatedNote(newNote.id));
    }

}