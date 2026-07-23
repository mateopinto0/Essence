const IMGBB_API_KEY = "db99bff254b71411046cbfa9b8431ebd";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image",file);

    try{
        const response =await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`,{
            method: "POST",
            body: formData
        });

        const data= await response.json();

        if(!data.success){
            throw new Error("Error al subir imagen");
        }
        return data.data.url;
    } catch (error){
        console.log("Error: " + error)
        throw error;
    }
};