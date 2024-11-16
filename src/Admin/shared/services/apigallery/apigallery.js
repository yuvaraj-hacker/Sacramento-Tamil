import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallGallerys = async(params)=>{
   var res=await axios.get(`${apiurl()}/api/getallgallery`,{params:params });
   return res.data;
}

export const getuniquevaluebyfield = async(params)=>{
   console.log(params)
   var res=await axios.get(`${apiurl()}/api/getgallerybyid`,{params:params});
   return res.data;
}

export const saveGallerys=async(datas,onUploadProgress)=>{
   try {
      const formData = new FormData();
      for (const key in datas) {
         if(key== 'Image'){
            for(let i = 0; i < datas['Image'].length; i++)
               if (datas['Image'][i] instanceof File)
                  formData.append(key, datas[key][i]);
               else
                  formData.append(key, datas[key]);
         }
         else{
            formData.append(key, datas[key]);
         }
      }

      var res=await axios.post(`${apiurl()}/api/uploadgallry`,formData,{ headers: {"Authorization" : `Bearer ${gettoken()}`},onUploadProgress});
      return res.data;
   }
   catch(err){
      console.log(err);
   }
}

// export const updateGallerys=async(datas)=>{
//    const formData = new FormData();
//    for (const key in datas) {
//       if(key== 'Image'){
//          for(let i = 0; i < datas['Image'].length; i++)
//            if (datas['Image'][i] instanceof File)
//              formData.append(key, datas[key][i]);
//            else
//             formData.append(key, datas[key]);
//       }
//       else{
//          formData.append(key, datas[key]);
//       }
//    }
//    var res=await axios.put(`${apiurl()}/api/updategallery`,formData,{params:{id:datas?.id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
//    return res.data;
// }

export const updateGallerys = async (datas) => {
   try {
     const formData = new FormData();
     
     for (const key in datas) {
       if (key === 'Image' ) {
         if (Array.isArray(datas[key])) {
           datas[key].forEach((file, index) => {
             if (file instanceof File) {
               formData.append(key, file);
             }
           });
         } else if (datas[key] instanceof File) {
           formData.append(key, datas[key]);
         }
       } else {
         formData.append(key, datas[key]);
       }
     }
 
     for (let pair of formData.entries()) {
       console.log('FormData:', pair[0], pair[1]);
     }
 
     const response = await axios.put(
       `${apiurl()}/api/updategallery`,
       formData,
       {
         params: { id: datas?.id },
         headers: {
           "Authorization": `Bearer ${gettoken()}`,
           "Content-Type": "multipart/form-data",
         }
       }
     );
 
     if (!response.data.success) {
       throw new Error(response.data.message || 'Update failed');
     }
 
     return response.data;
   } catch (error) {
     console.error('Update Gallery Error:', error);
     throw error;
   }
 };




export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/gallery/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const deleteGallerys=async(id)=>{
   var res=await axios.delete(`${apiurl()}/api/deletegallery`,{params:{id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
