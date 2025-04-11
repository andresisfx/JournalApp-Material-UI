import { uploadFile } from "../src/helpers/uploadFile";

describe('Pruebas en uploadFile', () => {
    test('debe de subir el archivo correctamente', async () => {
    const imageUrl="https://e00-xlk-ue-marca.uecdn.es/uploads/2025/03/28/16218459066717.jpeg";
    const res= await fetch(imageUrl);
    const blob=await res.blob();
    const file = new File([blob], 'foto.jpg');
    
    const url= await uploadFile(file);
    expect(typeof url).toBe('string');

   })
})