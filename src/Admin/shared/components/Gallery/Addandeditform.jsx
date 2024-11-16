import moment from 'moment-timezone';
import { Dialog } from 'primereact/dialog';
import { ProgressBar } from 'primereact/progressbar';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

export default function Addandeditform(props) {
    const { visible, setVisible, handlesave, handlechange, loading, formdata, handleupdate, dataUrl, setDataUrl, AddGame, removeGame, progress} = props;

    //console.log(dataUrl)

    const closeModel = ()=>{
        setVisible(false);
        setDataUrl(null)
    }
    return (
        <Dialog header={!formdata?.id ? "Add Gallery" : "Update Gallery"} visible={visible} onHide={() =>closeModel() } className="!w-full lg:!w-[40rem]">
            <form onSubmit={!formdata?.id ? handlesave : handleupdate} encType="multipart/form-data">
                <div className="mb-3">
                    <div className="flex items-center justify-center mb-3">
                        <label className=" relative z-[1] flex flex-col items-center justify-center w-[80%] h-55 sm:w-[40%] sm:h-60 overflow-hidden rounded-md border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        {dataUrl ? (
                            <div className='mb-5'>
                                <img src={dataUrl.src} alt="" />
                            </div>
                        ) : formdata?.Image ? (
                            <div className='mb-5'>
                                <img src={`${apiurl()}/${formdata.Image}`} alt="" />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center pt-4 pb-5">
                                <i className="fi fi-sr-mode-landscape"></i>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span>
                                </p>
                            </div>
                        )}
                            

                            <input type="file" name="Image" multiple onChange={handlechange} className="hidden" />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Name</label>
                        </div>
                        <input type="text" name="Imagename" value={formdata?.Imagename} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Year</label>
                        </div>
                        <input type="text" name="Year" value={formdata?.Year} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required />
                    </div>

                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Video url</label>
                        </div>
                        <textarea type="" name="Video" value={formdata?.Video} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none min-h-20" required />
                    </div>

                    <div className="mb-2">
                        <div className="mb-2">
                            <label>Status</label>
                        </div>
                        <select name="Status" value={formdata?.Status} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required>
                            <option value="">Select Type</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>                    

                </div>
                <div className="mb-2">
                    <button type="submit" className="w-full px-4 py-2 text-white bg-secondary border rounded-md" >
                        {loading && <span className="animate-spin text-xl inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>} 
                        {!formdata?.id ? "Add Gallery" : "Update Gallery"}
                    </button>
                </div>
            </form>
            {progress > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <ProgressBar value={progress}></ProgressBar>
                </div>
            )}
        </Dialog>
    )
}
