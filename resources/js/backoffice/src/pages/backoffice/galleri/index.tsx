// components

import React, { useEffect, useState } from 'react'
import { FileUploader, FormInput, PageBreadcrumb } from '../../../components'
import { LinkType } from '../../../dto/link_type';
import Swal from 'sweetalert2';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalLayout } from '../../../components/HeadlessUI';
import TablePaginate from '../../../components/Table/tablePaginate';
import { deleteGalleri, getCategories, getGalleri, postGalleri } from '../../../helpers';
import ModalPreview from '../../../components/ModalPreviewImage/ModalPreview';
import Select from 'react-select'
import { HelperFunction } from '../../../helpers/HelpersFunction';

const Index = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ description: '', image: '', is_active: 1, category: "" });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState(false)
    const [kategoriOptions, setKategoriOptions] = useState<any>([])


    const fetchData = async (page = 1) => {
        setLoading(true);
        const res: any[] = await getGalleri(`?page=${page}&category=gallery`);
        setDataPaginate(res);
        setLoading(false);
    }

    useEffect(() => {
     fetchData();
    getCategories(`?menu_tujuan=Galleri`).then((res) => {
           setKategoriOptions(HelperFunction.FormatOptions(res.data, 'nama_kategori', 'id'))
        })
    },[])

    const postData = async () => {
        setLoading(true);
        if (!isCreate) {
            // delete formData.image
            delete formData.image_thumb
        }
        const data = { ...formData, category: "gallery",  _method: formData.id ? 'PUT' : 'POST' };
        await postGalleri(data, formData?.id).then(() => {
            setModal(false);
            Swal.fire('Success', formData.id ? 'Update Galleri Berhasil' : 'Input Galleri Berhasil', 'success');
        }).catch((err) => {
            setModal(false);
            console.log(err)
            Swal.fire('Error', err.name[0], 'error');
        })
        await fetchData();
        setModal(false);
    };

    const columns = [
        { name: 'Deskripsi', row: (cell: any) => <div>{cell.description}</div> },
        {
            name: 'Image', row: (cell: LinkType) => <button className='btn bg-success text-white' onClick={() => { setPreviewImage(true); setFormData(cell) }}>
                Preview image
            </button>
        },
        {
            name: 'Action', row: (cell: any) => (
               <>
                <button className='btn bg-primary text-white' onClick={() => handleEdit(cell)}>
                    Edit
                </button>&nbsp;
                 <button className='btn bg-primary text-white' onClick={() => handleDelete(cell)}>
                    Hapus Foto
                </button>
               </>
            )
        }
    ];


    const handleDelete = (val: any) => {
        Swal.fire({
            title: "Hapus Foto",
            text: "Anda Yakin ingin hapus Foto berikut",
            showCancelButton: true,
            cancelButtonText: "Tidak",
            icon: 'warning'
        }).then((res) => {
            if(res.isConfirmed){
                deleteGalleri({
                    _method: "DELETE"
                }, val?.id).then((res) => {
                    Swal.fire('Success', 'Hapus gambar berhasil', 'success')
                    fetchData()
                })
            }
        })
    }

    const onFileUpload = (val: any) => {
        console.log(val)
        setFormData({ ...formData, image: val[0] })
    }

    const handleEdit = (evt) => {
        setModal(true);
         setFormData(evt);
         setIsCreate(false);

    }

    return (
        <>
            {loading && <LoadingScreen />}
            <ModalPreview toggleModal={() => setPreviewImage(false)} isOpen={previewImage} img={formData?.image} />
            {modal && (
                <ModalLayout showModal={modal} toggleModal={() => setModal(false)} placement='justify-center items-start'>
                    <div className='m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded'>
                        <div className='flex justify-between items-center py-2.5 px-4 border-b'>
                            <h3 className='text-lg'>{isCreate ? 'Tambah Data' : 'Edit Data'}</h3>
                            <button className='h-8 w-8' onClick={() => setModal(false)}>
                                <i className='ri-close-line text-2xl' />
                            </button>
                        </div>
                        <div className='p-4 max-h-screen overflow-y-auto w-[70vw]'>
                            <FormInput name='name' label='description' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className='form-input mb-3' />
                               {/* <div className='mb-2'>
                                <label className="mb-2" htmlFor="choices-text-remove-button">
                                    Kategori
                                </label>
                                <Select  className="select2 z-5" options={kategoriOptions} value={selectedKategori} onChange={(e) => setSelectedKategori(e)} />
                            </div> */}
                            <div className="flex justify-between items-center">
                                <h4 className="card-title mb-1">Image</h4>
                            </div>
                            <FileUploader  required={true} acceptedTypes={["image/jpeg", "image/jpg", "image/png"]} singleFile multipleUploads={false} onFileUpload={onFileUpload} icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text=" klik untuk upload." />

                              {/* <div className="mt-4">
                                 {!isCreate && (
                                <div className='mb-2'>
                                    <h6 className='text-sm mb-2'>Status</h6>
                                    <input type='checkbox' checked={formData.is_active === 1 ? true : false} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })} />
                                    <label className='ml-2'>Aktif</label>
                                </div>
                            )}
                              </div> */}
                            {/* <FormInput name='image' label='Format' value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className='form-input mb-3' /> */}

                        </div>
                        <div className='flex justify-end p-4 border-t gap-x-4'>
                            <button className='btn bg-light text-gray-800' onClick={() => setModal(false)}>Close</button>
                            <button className='btn bg-primary text-white' onClick={postData}>Submit</button>
                        </div>
                    </div>
                </ModalLayout>
            )}
            <PageBreadcrumb title="Galleri" subName="Backoffice" />
            <div className='bg-white p-4'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Galleri</h3>
                    <button className='btn bg-primary mb-4 text-white' onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', image_file: '', is_active: 1 }); }}>Tambah Data</button>
                </div>
                <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
                <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={(val) => fetchData(val?.current_page as any + 1)} />
            </div>
        </>
    )
}

export default Index
