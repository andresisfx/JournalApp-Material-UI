import { startNewNote } from "../../../src/store/journal";


describe('test de JournalThunks', () => {

    const dispatch= jest.fn();
    const getState= jest.fn();
    beforeEach( ()=> jest.clearAllMocks());

    test('startNewNote debe crear una nueva nota en blanco', async () => {
        const uid= 'TEST-UID';
        getState.mockReturnValue({ authStore: { uid: uid } });
       await startNewNote()(dispatch, getState);
    })
})