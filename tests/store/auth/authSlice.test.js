import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../../tests/fixtures/authFixtures.js";

describe('Pruebas en authSlice', () => {

    test('debe de retornar el estado inicial y llamarse auth', () => {
        expect( authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        console.log("aqui state",state)
        expect(state).toEqual(initialState);
        
    });
});

  