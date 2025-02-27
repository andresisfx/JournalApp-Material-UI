import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseBD } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActivatedNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";


export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch(savingNewNote());
        
        const {uid} = getState().authStore;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        };
        
        const newDoc = doc(collection( firebaseBD, `${uid}/journal/notes`));
        const setDocResponse = await setDoc(newDoc, newNote);
        

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActivatedNote(newNote.id));
    }

}

export const startLoadingNotes = () => {
   return async(dispatch, getState) => {
    const {uid} = getState().authStore;
    if(!uid) throw new Error('El UID del usuario no existe');
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
   }
}