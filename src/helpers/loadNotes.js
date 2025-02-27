import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseBD } from "../firebase/config";
import { NotesOutlined } from "@mui/icons-material";


export const loadNotes= async(uui)=>{

    const collectionRef=collection(firebaseBD, `${uui}/journal/notes`);
    const docs = await getDocs(collectionRef);
    
    const notes=[];

    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data()});
    });
    return notes;
    
}