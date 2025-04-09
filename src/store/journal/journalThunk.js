import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseBD } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActivatedNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes, uploadFile } from "../../helpers";


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
        dispatch(setActivatedNote({id:newNote.id}));
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

export const startSaveingNote = () => {
   return async(dispatch,getState) => {

       dispatch(setSaving());
       const {uid} = getState().authStore;
       const {active:note} = getState().journalStore;

       const notefirestore ={...note}
       delete notefirestore.id;
       

       const docRef = doc(firebaseBD, `${uid}/journal/notes/${note.id}`)
       await setDoc(docRef, notefirestore, {merge: true});//merge hace que los campos que existen en l DB y no se envian , se mantiene
       console.log('entrando al dispatch del updatenotes');
       dispatch(updateNote(note));
   }
}

export const statUpLoadingFiles =(files=[])=>{
    return async (dispatch)=>{
        dispatch(setSaving())
        if(files.length === 0) throw new Error('No hay archivos a subir');
        if(files.length > 20) throw new Error('No se pueden subir mas de 20 archivos');

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(uploadFile(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        console.log(photosUrls);
        dispatch(setPhotosToActiveNote(photosUrls));
        
    }
}