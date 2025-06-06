export const uploadFile = async (file) => {
    // if (!file) throw new Error('No tenemos ningun archivo a subir');
    if (!file) return null;
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dpd4mxi0u/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);    
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
      
        if (resp.ok) {
            const cloudResp = await resp.json();
         
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        // console.log(error);
        // throw new error(error.message);
        console.error("Error al subir imagen:", error);
        return null
    }
    }