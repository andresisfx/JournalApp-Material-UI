export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState = {
    status: 'authenticated',
    uid: '123456789',
    email: 'andresis@gmail.com',
    displayName: 'Andres',
    photoURL: 'https://media.istockphoto.com/vectors/profile-picture-vector-id517998264?k=6&m=517998264&s=612x612&w=0&h=pBhzNBVZTXTqFLVJaOq7AaCZ0iOAzsJjQm4Rv4aTb5E=',
    errorMessage: null
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    uid: '123456789',
    email: 'andres@gmail.com',
    displayName: 'Andres',
    photoURL: 'https://media.istockphoto.com/vectors/profile-picture-vector-id517998264?k=6&m=517998264&s=612x612&w=0&h=pBhzNBVZTXTqFLVJaOq7AaCZ0iOAzsJjQm4Rv4aTb5E=',
    errorMessage: null
}   



