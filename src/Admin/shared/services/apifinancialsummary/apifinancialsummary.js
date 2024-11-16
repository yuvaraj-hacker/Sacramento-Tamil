import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallFinancialsum = async (params) => {
  var res = await axios.get(`${apiurl()}/api/getallfinancials`, { params: params });
  return res.data;
};

export const getuniquevaluebyfield = async (params) => {
  console.log(params);
  var res = await axios.get(`${apiurl()}/api/getfinancialsbyid`, {
    params: params,
  });
  return res.data;
};

export const saveFinancialsum = async (datas, onUploadProgress) => {
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

    var res = await axios.post(`${apiurl()}/api/uploadfinancial`, formData, {
      headers: { Authorization: `Bearer ${gettoken()}` },
      onUploadProgress,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateFinancialsum = async (datas) => {
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
  var res = await axios.put(`${apiurl()}/api/editfinancial`, formData, {
    params: { id: datas?.id },
    headers: { Authorization: `Bearer ${gettoken()}` },
  });
  return res.data;
};

export const deleteFinancialsum = async (id) => {
  var res = await axios.delete(`${apiurl()}/api/deletefinancial?id=${id}`, {
    headers: { Authorization: `Bearer ${gettoken()}` },
  });
  return res.data;
};
