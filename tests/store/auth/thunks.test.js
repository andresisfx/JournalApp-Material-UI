import { checkingAuthentication } from "../../../src/store/auth/thunk";
import { checkingCredentials } from "../../../src/store/auth"; 


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

beforeEach(()=>jest.clearAllMocks())
describe('test de AuthThunks', () => {

   
    test ('debe de invocar el checkingCredentials', async () => {
      const dispatch = jest.fn();
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    })
})