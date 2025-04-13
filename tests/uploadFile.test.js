import { uploadFile } from "../src/helpers/uploadFile";
import { File, FormData } from 'formdata-node';
import { readFileSync } from 'fs';
import path from 'path';




describe('Pruebas en uploadFile', () => {
  test('debe de subir el archivo correctamente', async () => {

// leer el archivo como buffer
const imagePath = path.resolve(__dirname, './assets/test-image.jpg');
const fileBuffer = readFileSync(imagePath);

// crear un File con formdata-node
const file = new File([fileBuffer], 'test-image.jpg', { type: 'image/jpeg' });

    const url = await uploadFile(file);
    console.log("URL devuelta:", url);

    expect(typeof url).toBe('string');
    expect(url.includes('https://')).toBe(true);
  });
});
