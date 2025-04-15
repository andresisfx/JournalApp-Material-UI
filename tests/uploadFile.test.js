import { uploadFile } from "../src/helpers/uploadFile";
import { File, FormData } from 'formdata-node';
import { readFileSync } from 'fs';
import path from 'path';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'my_cloud_name:',
  api_key: 'My_api_key',
  api_secret: 'My_api_secret',
  secure: true
});




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

        const segnments= url.split('/');
        const imageName = segnments[segnments.length - 1].split('.')[0];
        console.log("imageName:", imageName);
        const deleted = await cloudinary.api.delete_resources([imageName], { resource_type: 'image' });
        console.log(deleted)
  });

  test('debe de retornar null si no se sube el archivo', async () => {

    const file = new File([], 'test-image.jpg');
    const url = await uploadFile(file);
    expect(url).toBe(null);
  });


});
