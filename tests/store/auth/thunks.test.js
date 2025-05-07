import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunk";
import { checkingCredentials, logout } from "../../../src/store/auth"; 
import { demoUser } from "../../fixtures/authFixtures";
import { signInWithGoogle } from "../../../src/firebase/providers";


jest.mock("../../../src/firebase/providers.js", () => ({
  signInWithGoogle: jest.fn(() =>
    Promise.resolve({ ok: true, uid: '123', displayName: 'Test', email: 'test@example.com', photoURL: 'http://photo.url' })
  ),
  registerUserWithEmailPasswordProvider: jest.fn(() =>
    Promise.resolve({ ok: true, uid: '123', email: 'test@example.com', displayName: 'Test', photoURL: null })
  ),
  loginWithEmailPasswordProvider: jest.fn(() =>
    Promise.resolve({ ok: true, uid: '123', email: 'test@example.com', displayName: 'Test', photoURL: null })
  ),
  logoutFirebase: jest.fn(() => Promise.resolve()),
}));
jest.mock("../../../src/firebase/config.js", () => ({
  firebaseAuth: {
    signOut: jest.fn(() => Promise.resolve()),
    currentUser: null,
  },
}));


describe('test de AuthThunks', () => {
    
    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    // test ('debe de invocar el checkingCredentials', async () => {
      
    //     await checkingAuthentication()(dispatch);
    //     expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    // })

    test('startGoogleSignIn debe llamar a checkingCredentials y login -Exito', async () => {
      const loginData= {ok:true,...demoUser};
      await signInWithGoogle.mockResolvedValue(loginData);
      await startGoogleSignIn()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
      expect(dispatch).toHaveBeenCalledWith(login(loginData));
      
    })

    test('startGoogleSignIn debe llamar a checkingCredentials y logout -Error', async () => {
      const loginData= {ok:false,errorMessage:'Un error en Google'};
      await signInWithGoogle.mockResolvedValue();
      await startGoogleSignIn()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
      expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
      
    })
})

