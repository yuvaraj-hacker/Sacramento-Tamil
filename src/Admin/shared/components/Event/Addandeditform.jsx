import moment from 'moment-timezone';
import { Dialog } from 'primereact/dialog';
import { Editor } from 'primereact/editor';
import { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

export default function Addandeditform(props) {
    const { visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate , AddGame, removeGame, handlechangeGames,dataUrl} = props;
  
  
    // const modules = {
    //   toolbar: [
    //     [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    //     [{size: []}],
    //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //     [{'list': 'ordered'}, {'list': 'bullet'}, 
    //      {'indent': '-1'}, {'indent': '+1'}],
    //     ['link', 'image', 'video'],
    //     ['clean']
    //   ],
    // };
  
    // const formats = [
    //   'header', 'font', 'size',
    //   'bold', 'italic', 'underline', 'strike', 'blockquote',
    //   'list', 'bullet', 'indent',
    //   'link', 'image', 'video'
    // ];

    return (
        <Dialog header={!formdata?.id ? "Add Event" : "Update Event"} visible={visible} onHide={() => setVisible(false)} className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?.id ? handlesave : handleupdate}>
                <div className="mb-3">
                    <div className="flex items-center justify-center mb-3">
                        <label className={`flex overflow-hidden flex-col items-center justify-center w-40 h-40 sm:w-60 sm:h-60 rounded-xl border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                        {dataUrl ? (
                            <div className='mb-5'>
                                <img src={dataUrl.src} alt="" />
                                {/* <span className='absolute text-xl bg-primary top-[0] right-[0] px-3 py-1 text-white z-[2]'>+{dataUrl.length}</span> */}
                            </div>
                        ) : formdata?.Image ? (
                            <div className='mb-5'>
                                <img src={`${apiurl()}/${formdata.Image}`} alt="" />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                <i className="fi fi-sr-mode-landscape"></i>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <p className="font-semibold">Click to upload</p>
                                    <p className="text-xs -mb-5 translate-y-5">Size : 21*29.7 cm</p>
                                </p>
                            </div>
                        )}


                            <input type="file" name="Image" onChange={handlechange} className="hidden" />

                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Event Name</label>
                        </div>
                        <input type="text" name="Eventname" value={formdata?.Eventname} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Event Date</label>
                        </div>
                        <input  type="datetime-local" name="Date" value={moment(formdata?.Date).format("YYYY-MM-DDTHH:mm")} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>

                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Activities</label>
                        </div>
                        <input type="text" name="Activities" value={formdata?.Activities} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Status</label>
                        </div>
                        <select name="Status" value={formdata?.Poster_Type} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required>
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    {/* <div className="mb-3 lg:col-span-2">
                        <div className="mb-2">
                            <label>Description</label>
                        </div>
                        <Editor value={formdata?.Description} onTextChange={(e) => handlechange(e)} style={{ height: '320px' }} /> 
                        <ReactQuill value={formdata?.Description} onChange={(e) => handlechange(e,'Description')} modules={modules} formats={formats} />
                    </div> */}

                </div>
                
                <div className="mb-2">
                    <button type="submit" className="w-full px-4 py-2 text-white bg-secondary border rounded-md" >
                        {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} 
                        {!formdata?.id ? "Add Event" : "Update Event"}
                    </button>
                </div>
            </form>
        </Dialog>
    )
}
