import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { initialState, demoUser , authenticatedState} from "../../../tests/fixtures/authFixtures.js";

describe('Pruebas en authSlice', () => {

    test('debe de retornar el estado inicial y llamarse auth', () => {
        expect( authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        
        expect(state).toEqual(initialState);
        
    });

    test('debe de autenticar el usuario', () => {   
    //    console.log(login(demoUser));
    const state = authSlice.reducer(initialState,login(demoUser));
    expect(state).toEqual({
        status: 'authenticated',
        uid: demoUser.uid,
        email: demoUser.email,
        displayName: demoUser.displayName,
        photoURL: demoUser.photoURL,
        errorMessage: null
    })
    });

    test('debe hacer el logout sin argumentos',()=>{
        const state = authSlice.reducer(authenticatedState,logout())
        expect(state).toEqual(
            {                                                                                                         
                status: 'not-authenticated',                                                                            
                uid: null,                                                                                              
                email: null,                                                                                            
                displayName: null,                                                                                      
                photoURL: null,
                errorMessage: undefined
            }
        )
    });

    test('debe hacer el logout ymostrar el mensaje de error',()=>{
        const errorMessage= 'Credenciales no son correctas'
        const state = authSlice.reducer(authenticatedState,logout({errorMessage:errorMessage}))
        expect(state).toEqual(
            {                                                                                                         
                status: 'not-authenticated',                                                                            
                uid: null,                                                                                              
                email: null,                                                                                            
                displayName: null,                                                                                      
                photoURL: null,
                errorMessage: errorMessage
            }
        )
    });
    test('debe cambiar el estado a checking',()=>{
       const state= authSlice.reducer(authenticatedState,checkingCredentials())
       expect (state.status).toBe('checking')
    });

});

  