import { authSlice } from "../../../src/store/auth/authSlice";


describe('Pruebas en authSlice', () => {

    test('debe de retornar el estado por defecto', () => {
        expect( authSlice.getInitialState() ).toEqual({
            status: 'checking', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null  
        });
    });
});

  