import { useEffect, useState } from 'react';
import { ModalLayout } from '../../../components/HeadlessUI';
import { FileUploader } from '../../../components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import cloneDeep from 'clone-deep';
import Swal from 'sweetalert2';
import { deleteGalleri, getDocumentGenerals, getGalleri, getGenerals, PostDocumentGenerals, postGalleri, PostGenerals } from '../../../helpers';


interface ModalAddTypes {
    isOpen: boolean,
    toggleModal: () => void,
    isCreate: boolean,
    setLoading: (loading: any) => void,
    detailData: any,
}

export const ModalAdd = ({ isOpen, toggleModal, isCreate, setLoading, detailData }: ModalAddTypes) => {
    const [formData, setFormData] = useState<any>({

    })
    const [imageDelete, setImageDelete] = useState<any>([])
    const [oldImages, setOldImages] = useState<any>([])

    const titleToSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const slug = titleToSlug(detailData?.title);


    useEffect(() => {
        if (["Sejarah ITAKI", "Visi", "Misi"].includes(detailData?.title)) {


            getGenerals(`?category=${detailData?.key}`).then((res) => {
                setFormData({
                    description: res?.data[0]?.content,
                    oldDesc: res?.data[0]?.content || false,
                    id: res?.data[0]?.id,
                })
            })
        }
        if (detailData?.title === "Struktur Anggota") {
            getGalleri(`?category=${detailData?.key}`).then((res) => {
                setOldImages(res?.data)
            })
        }
        if (detailData?.title === "Kode Etik Perushaan") {
            getDocumentGenerals(`?category=${detailData?.key}`).then((res) => {
                setOldImages(res?.data)
            })
        }

    }, [])


    const postData = async () => {
        setLoading(true);

        try {
            if (["Sejarah ITAKI", "Visi", "Misi"].includes(detailData?.title)) {
                if (formData?.oldDesc) {
                    await PostGenerals({
                        category: detailData?.key,
                        title: slug,
                        value: formData.description,
                        _method: "PUT"
                    }, formData?.id);
                } else {
                    await PostGenerals({
                        title: detailData?.key,
                        category: slug,
                        value: formData.description,
                    });
                }
            }
            if (detailData?.title === "Kode Etik Perushaan") {
                console.log("FILLLLLE", formData?.image)
                if (formData?.image) {
                    await PostDocumentGenerals({
                        title: formData?.image?.name,
                        value: slug,
                        category: detailData?.key,
                        file: formData?.image,
                    });
                }

                await imageDelete.map((id) => {
                    PostDocumentGenerals({
                        '_method': 'DELETE'
                    }, id)
                })
            }
            if (detailData?.title === "Struktur Anggota") {
                if (formData?.image) {
                    await postGalleri({
                        category: detailData?.key,
                        image: formData?.image,
                        description: slug
                    });
                }

                await imageDelete.map((id) => {
                    deleteGalleri({
                        '_method': 'DELETE'
                    }, id)
                })
            }

            toggleModal();
            Swal.fire('Success', `Edit ${detailData?.title} Berhasil`, 'success');
        } catch (error: any) {
            Swal.fire('Error', error.message || 'Terjadi kesalahan', 'error');
        } finally {
            setLoading(false);
        }
    };


    const newFileDelete = (index: any) => {
        let prevData = cloneDeep(formData.image_files)
        prevData.splice(index, 1)
        setFormData({ ...formData, image: prevData })
    }

    const onFileUpload = (images: any) => {
        let temp: any = []
        images.forEach((image) => {
            temp.push(image)
        })
        setFormData({ ...formData, image: temp[0] })
    }

    const handlePrevImage = (parms, idx) => {
        let prevData = cloneDeep(oldImages)
        prevData.splice(idx, 1)
        setOldImages(prevData)
        setOldImages(null)
        setImageDelete([...imageDelete, parms])

    }

    const modules = {
        toolbar: [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'clean']],
    }

    const handleDesc = (value: string, delta: any) => {

        if (!delta || !delta.ops || formData.description == value) return;
        setFormData({ ...formData, description: value })

    }

    console.log("old", oldImages)



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

                    <div className={`${["Visi", "Misi", "Sejarah ITAKI"].includes(detailData?.title) ? "block" : "hidden"} mb-20`} >
                        <div className="flex justify-between items-center">
                            <h4 className="card-title">Deskripsi *</h4>
                        </div>

                        <div className="pt-3">
                            <ReactQuill defaultValue={`input deskripsi disini`} theme="snow" modules={modules} style={{ height: 300 }} value={formData.description} onChange={handleDesc} />
                        </div>
                    </div>


                    <div className={`${["Kode Etik Perushaan", "Struktur Anggota",].includes(detailData?.title) ? "block" : "hidden"} mb-2`} >
                        <label className="mb-2" htmlFor="choices-text-remove-button">
                            Upload Image (max ukuran image {import.meta.env.VITE_REACT_APP_MAX_UPLOAD_SIZE}MB)
                        </label>
<FileUploader
    singleFile
    multipleUploads={false}
    onFileDelete={newFileDelete}
    detailData={oldImages}
    handleDeletePrevImage={handlePrevImage}
    prevData={oldImages}
    maxSizeParms={2}
    onFileUpload={onFileUpload}
    acceptedTypes={detailData?.title === "Kode Etik Perushaan" ? ["application/pdf"] : ["image/jpeg", "image/jpg", "image/png"]} // 👈 kondisi di sini
    icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200"
    text={detailData?.title === "Kode Etik Perushaan"
        ? " klik untuk upload PDF."
        : " klik untuk upload Image."
    }
/>
                    </div>

                </div>
                <div className='flex justify-end p-4 border-t gap-x-4'>
                    <button className='btn bg-light text-gray-800' onClick={() => toggleModal()}>Close</button>
                    <button className='btn bg-primary text-white' onClick={postData}>Submit</button>
                </div>
            </div>
        </ModalLayout>
    )
}
