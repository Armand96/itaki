// components

import React, { useEffect, useState } from 'react'
import { FileUploader, FormInput, PageBreadcrumb } from '../../../components'
import { LinkType } from '../../../dto/link_type';
import Swal from 'sweetalert2';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalLayout } from '../../../components/HeadlessUI';
import TablePaginate from '../../../components/Table/tablePaginate';
import ModalPreview from '../../../components/ModalPreviewImage/ModalPreview';
import { getSosmed, PostSosmed } from '../../../helpers';

const Index = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ name: '', image: '', is_active: 1 });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState(false)

    const fetchData = async (page = 1) => {
        setLoading(true);
        const res: any[] = await getSosmed(`?page=${page}`);
        setDataPaginate(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const postData = async () => {
        if (!isCreate) {
            delete formData.image
            delete formData.image_thumb
        }
        setLoading(true);
        const data = { ...formData, _method: formData.id ? 'PUT' : 'POST' };
        await PostSosmed(data, formData?.id).then(() => {
            setModal(false);
            Swal.fire('Success', formData.id ? 'Update Sosial Media Berhasil' : 'Input Sosial Media Berhasil', 'success')
        }).catch((err) => {
            setModal(false);
            console.log(err)
            Swal.fire('Error', err.name[0], 'error');
        })
        await fetchData();
    };

    const columns = [
        { name: 'Nama', row: (cell: LinkType) => <div>{cell.name}</div> },
        { name: 'Link', row: (cell: LinkType) => <div>{cell.name}</div> },
        {
            name: 'Image', row: (cell: LinkType) => <button className='btn bg-success text-white' onClick={() => { setPreviewImage(true); setFormData(cell) }}>
                Preview image
            </button>
        },
        {
            name: 'Action', row: (cell: LinkType) => (
                <button className='btn bg-primary text-white' onClick={() => { setModal(true); setFormData(cell); setIsCreate(false); }}>
                    Edit
                </button>
            )
        }
    ];

    const onFileUpload = (val: any) => {
        setFormData({ ...formData, image: val[0] })
    }

    return (
        <>
            {loading && <LoadingScreen />}
            <ModalPreview toggleModal={() => setPreviewImage(false)} isOpen={previewImage} img={formData?.image_path} />
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
                            <FormInput name='name' label='Nama' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className='form-input mb-3' />
                            <FormInput name='link' label='Link' value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} className='form-input mb-3' />
                            <div className="flex justify-between items-center">
                                <h4 className="card-title mb-1">Image</h4>
                            </div>
                            <FileUploader onFileDelete={() => null} detailData={null} handleDeletePrevImage={() => null} prevData={null} singleFile multipleUploads={false} onFileUpload={onFileUpload} icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text=" klik untuk upload." />

                        </div>
                        <div className='flex justify-end p-4 border-t gap-x-4'>
                            <button className='btn bg-light text-gray-800' onClick={() => setModal(false)}>Close</button>
                            <button className='btn bg-primary text-white' onClick={postData}>Submit</button>
                        </div>
                    </div>
                </ModalLayout>
            )}
            <PageBreadcrumb title="Sosial Media" subName="Backoffice" />
            <div className='bg-white p-4'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Sosial Media</h3>
                    <button className='btn bg-primary mb-4 text-white' onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', image_file: '', is_active: 1 }); }}>Tambah Data</button>
                </div>
                <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
                <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={(val) => fetchData(val?.current_page as any + 1)} />
            </div>
        </>
    )
}

export default Index
