import { checkingAuthentication } from "../../../src/store/auth/thunk";
import { checkingCredentials } from "../../../src/store/auth/authSlice";    

jest.mock("../../../src/firebase/providers")
describe('test de thunks', () => {
    test ('debe de llamar el checkingCredentials', async () => {
      const dispatch = jest.fn();
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    })
})