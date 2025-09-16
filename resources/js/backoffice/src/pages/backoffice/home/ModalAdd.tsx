import { useEffect, useState } from 'react';
import { ModalLayout } from '../../../components/HeadlessUI';
import { FileUploader } from '../../../components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import cloneDeep from 'clone-deep';
import Swal from 'sweetalert2';
import { DeleteListKlien, getGenerals, getKlien, PostGenerals, PostListKlien } from '../../../helpers';


interface ModalAddTypes {
    isOpen: boolean,
    toggleModal: () => void,
    isCreate: boolean,
    setLoading: (loading: any) => void,
    detailData: any,
}

export const ModalAdd = ({ isOpen, toggleModal, isCreate, setLoading, detailData }: ModalAddTypes) => {

    const [formData, setFormData] = useState<any>()
    const [imageDelete, setImageDelete] = useState<any>([])
    const [oldImages, setOldImages] = useState<any>([])

    useEffect(() => {
        if (detailData?.key === "list_client") {
            getKlien("").then((res) => {
                setOldImages(res?.data)
            })
        }
        if (detailData?.key === "sambutan") {
            getGenerals("?category=sambutan").then((res) => {
                setFormData({
                    description: res?.data[0]?.content,
                    oldDesc: true,
                    id: res?.data[0]?.id,
                })
            })
        }
    }, [])


    const postData = async () => {
        try {
            setLoading(true);


            if (detailData?.key === "list_client") {
                if (formData?.image?.length > 0) {
                    const uploadImagesSequentially = async () => {
                        for (const file of Array.from(formData.image)) {
                            await new Promise((resolve) => {
                                setTimeout(async () => {
                                    await PostListKlien({
                                        category: "list_client",
                                        name: "list_client",
                                        image: file,
                                        description: "listKlien"
                                    });
                                    resolve(null);
                                }, 1000);
                            });
                        }
                    };
                    await uploadImagesSequentially();
                }
                await imageDelete.map((id) => {
                    DeleteListKlien({
                        '_method': 'DELETE'
                    }, id)
                })
            }
            if (detailData?.key === "sambutan") {
                if (formData?.oldDesc) {
                    PostGenerals({
                        category: "sambutan",
                        title: "sambutan",
                        value: formData.description,
                        _method: "PUT"

                    }, formData?.id)
                } else {
                    PostGenerals({
                        title: "sambutan",
                        category: "sambutan",
                        value: formData.description,
                    })
                }

            }


            toggleModal();
            Swal.fire('Success', `Edit ${detailData?.title} berhasil`, 'success');
        } catch (error) {
            Swal.fire('Error', error.message || 'Terjadi kesalahan', 'error');
        } finally {
            setLoading(false);
        }
    };


    const newFileDelete = (index: any) => {
        let prevData = cloneDeep(formData.image)
        prevData.splice(index, 1)
        setFormData({ ...formData, image: prevData })
    }

    const onFileUpload = (images: any) => {
        let temp: any = []
        images.forEach((image) => {
            temp.push(image)
        })
        setFormData({ ...formData, image: temp })
    }

    const handlePrevImage = (parms, idx) => {
        let prevData = cloneDeep(oldImages)
        prevData.splice(idx, 1)
        setOldImages(prevData)
        setImageDelete([...imageDelete, parms])

    }

    const modules = {
        toolbar: [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'clean']],
    }

    const handleDesc = (value: string, delta: any) => {

        if (!delta || !delta.ops || formData?.description == value) return;


        setFormData({ ...formData, description: value })

    }



    return (
        <ModalLayout showModal={isOpen} toggleModal={() => toggleModal()} placement='justify-center items-start'>
            <div className='m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded'>
                <div className='flex justify-between items-center py-2.5 px-4 border-b'>
                    <h3 className='text-lg'>{isCreate ? 'Tambah Data' : 'Edit Data'}</h3>
                    <button className='h-8 w-8' onClick={() => toggleModal()}>
                        <i className='ri-close-line text-2xl' />
                    </button>
                </div>
                <div className='p-4 overflow-y-auto w-[70vw]'>

                    <div className={`mb-20 ${detailData?.title === "Sambutan pimpinan" ? "block" : "hidden"}`}>
                        <div className="flex justify-between items-center">
                            <h4 className="card-title">Deskripsi</h4>
                        </div>

                        <div className="pt-3">
                            <ReactQuill defaultValue={`input deskripsi disini`} theme="snow" modules={modules} style={{ height: 300 }} value={formData?.description} onChange={handleDesc} />
                        </div>
                    </div>




                    <div className={`mb-2 ${detailData?.title === "List Klien" ? "block" : "hidden"}`} >
                        <label className="mb-2" htmlFor="choices-text-remove-button">
                            Upload Image (max ukuran image {import.meta.env.VITE_REACT_APP_MAX_UPLOAD_SIZE}MB)
                        </label>
                        <FileUploader   acceptedTypes={["image/jpeg", "image/jpg", "image/png"]} required={true}  onFileDelete={newFileDelete} detailData={detailData} handleDeletePrevImage={handlePrevImage} prevData={oldImages} maxSizeParms={2} onFileUpload={onFileUpload} icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text=" klik untuk upload. " />
                    </div>

                </div>
                <div className='flex justify-end p-4 border-t gap-x-4'>
                    <button className='btn bg-light text-gray-800' onClick={() => toggleModal()}>Close</button>
                    <button className='btn bg-primary text-white' disabled={
                        (!formData?.description && detailData?.key === "sambutan") ||
                        (!formData?.image?.length && detailData?.key === "list_client")
                    }
                        onClick={postData}>Submit</button>
                </div>
            </div>
        </ModalLayout>
    )
}
