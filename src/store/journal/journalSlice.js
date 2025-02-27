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
            
        },
        setNotes: (state,action) => {
            
        },
        setSaving: (state,action) => {
            
        },
        updateNote: (state,action) => {
            
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