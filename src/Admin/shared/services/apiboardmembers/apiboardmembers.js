import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";


export const getallBoardmembers = async (params) => {
  var res = await axios.get(`${apiurl()}/api/getallBoardmembers`, { params: params });
  return res.data;
};


export const getuniquevaluebyfield = async (params) => {
  console.log(params);
  var res = await axios.get(`${apiurl()}/api/gallery/getBoardmembersbyid`, {
    params: params,
  });
  return res.data;
};


export const saveBoardmembers = async (datas, onUploadProgress) => {
  try {
    const formData = new FormData();
    for (const key in datas) {
      if (key == "Image") {
        for (let i = 0; i < datas["Image"].length; i++)
          if (datas["Image"][i] instanceof File)
            formData.append(key, datas[key][i]);
          else formData.append(key, datas[key]);
      } else {
        formData.append(key, datas[key]);
      }
    }

    var res = await axios.post(`${apiurl()}/api/uploadBoardmembers`, formData, {
      headers: { Authorization: `Bearer ${gettoken()}` },
      onUploadProgress,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


export const updateBoardmembers = async (datas) => {
  const formData = new FormData();
  for (const key in datas) {
    if (key == "Image") {
      for (let i = 0; i < datas["Image"].length; i++)
        if (datas["Image"][i] instanceof File)
          formData.append(key, datas[key][i]);
        else formData.append(key, datas[key]);
    } else {
      formData.append(key, datas[key]);
    }
  }
  var res = await axios.put(`${apiurl()}/api/editBoardmembers`, formData, {
    params: { id: datas?.id },
    headers: { Authorization: `Bearer ${gettoken()}` },
  });
  return res.data;
};


export const deleteBoardmembers = async (id) => {
  var res = await axios.delete(`${apiurl()}/api/deleteBoardmembers?id=${id}`, {
    headers: { Authorization: `Bearer ${gettoken()}` },
  });
  return res.data;
};
