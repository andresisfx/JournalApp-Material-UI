import React, { useEffect,  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'
import { logout, login } from '../store/auth'
import { startLoadingNotes } from '../store/journal/journalThunk'
export const useCheckAuth = () => {


    const {status} = useSelector(state => state.authStore)
    const dispatch = useDispatch();
    useEffect(
      () => {
        onAuthStateChanged(firebaseAuth, (user) => {
          if(!user) return dispatch(logout());
          const {uid, email, displayName, photoURL} = user;
          dispatch(login({uid, email, displayName, photoURL}));
          dispatch(startLoadingNotes())
        })
        
      }
    ,[])
   
  return {
    status
  }
}
