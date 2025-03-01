import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: (state) => { 
            state.isSaving = true; 
        },
        addNewEmptyNote: (state,action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
            
        },
        setActivatedNote: (state,action) => {
            state.active = action.payload;
            state.messageSaved = '';
            
        },
        setNotes: (state,action) => {
            state.notes = action.payload;
        },
        setSaving: (state,action) => {
            state.isSaving = true;
            state.messageSaved = '';
            //TODO: Mensaje de error
        },
        updateNote: (state,action) => {

            state.isSaving = false;
            state.notes = state.notes.map(note =>{
                if(note.id ===action.payload.id){
                    return action.payload;
                }
                return note;

                //TODO: Mensaje de actalizado
            } );
            console.log('estableciendo el mensaje en el slice');
            state.messageSaved = `${action.payload.title}, actualizado correctamente`;
        },
        deleteNoteById: (state,action) => {
            
        },
    }
});



export const {
    addNewEmptyNote,
    setActivatedNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote

 } = journalSlice.actions;