
import { useEffect, useState } from 'react';
import { FileUploader, FormInput, PageBreadcrumb } from '../../../components';
import Swal from 'sweetalert2';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalLayout } from '../../../components/HeadlessUI';
import TablePaginate from '../../../components/Table/tablePaginate';
import ModalPreview from '../../../components/ModalPreviewImage/ModalPreview';
import { getAnggota, PostAnggota } from '../../../helpers';

const Index = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ name: '', is_active: 1 });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState(false)

    const fetchData = async (page = 1) => {
        setLoading(true);
        const res: any[]= await getAnggota(`?page=${page}`);
        setDataPaginate(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const postData = async () => {

         delete formData?.image_thumb

        if(!formData?.is_show){
            delete formData?.urutan
        }
         if(!formData?.image){
            delete formData?.image
        }
        setLoading(true);
        const data = { ...formData, _method: formData.id ? 'PUT' : 'POST', urutan: formData?.urutan || null };
        await PostAnggota(data, formData?.id).then(() => {
            setModal(false);
            Swal.fire('Success', formData.id ? 'Update Anggota Berhasil' : 'Input Anggota Berhasil', 'success')
        }).catch((err) => {
            setModal(false);
            setLoading(false)
            console.log(err)
            Swal.fire('Error', err.name[0], 'error');
        })
        await fetchData();
    };

    const onFileUpload = (val: any) => {
        console.log(val)
        setFormData({ ...formData, image: val[0] })
    }


    const columns = [
        { name: 'Nama', row: (cell: any) => <div>{cell.nama}</div> },
        { name: 'Jabatan', row: (cell: any) => <div>{cell.jabatan}</div> },
        { name: 'Nomor KTA', row: (cell: any) => <div>{cell.nomor_kta}</div> },
        { name: 'Nomor Registrasi', row: (cell: any) => <div>{cell.nomor_registrasi}</div> },
        { name: 'Jenjang', row: (cell: any) => <div>{cell.jenjang}</div> },
        {
            name: 'Action', row: (cell: any) => (
                <button className='btn bg-primary text-white' onClick={() => { setModal(true); setFormData({...cell, is_show: cell?.urutan }); setIsCreate(false); }}>
                    Edit
                </button>
            )
        }
    ];

    return (
        <>
            {loading && <LoadingScreen />}
            <ModalPreview toggleModal={() => setPreviewImage(false)} isOpen={previewImage} img={formData?.image} />
            {modal && (
                <ModalLayout showModal={modal} toggleModal={() => setModal(false)} placement='justify-center items-start' >
                    <div className='m-3 sm:mx-auto flex flex-col bg-white shadow-sm '>
                        <div className='flex justify-between items-center py-2.5 px-4 border-b'>
                            <h3 className='text-lg'>{isCreate ? 'Tambah Data' : 'Edit Data'}</h3>
                            <button className='h-8 w-8' onClick={() => setModal(false)}>
                                <i className='ri-close-line text-2xl' />
                            </button>
                        </div>
                        <div className='p-4 h-[70vh] overflow-y-auto w-[70vw]'>
                            <FormInput name='nama' label='Nama' value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className='form-input mb-3' />
                            <FormInput name='jabatan' label='Jabatan' value={formData.jabatan} onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })} className='form-input mb-3' />
                            <FormInput name='deskripsi_jabatan' label='Deksripsi Jabatan' value={formData.deskripsi_jabatan}  type="textarea" onChange={(e) => setFormData({ ...formData, deskripsi_jabatan: e.target.value })} className='form-input mb-3' />
                            <FormInput name='jenjang' label='Jenjang' value={formData.jenjang}  type="number" onChange={(e) => setFormData({ ...formData, jenjang: e.target.value })} className='form-input mb-3' />
                            <FormInput name='nomor_kta' label='Nomor KTA' value={formData.nomor_kta}  type="number" onChange={(e) => setFormData({ ...formData, nomor_kta: e.target.value })} className='form-input mb-3' />
                            <FormInput name='nomor_registrasi' label='Nomor Registrasi' value={formData.nomor_registrasi}  type="text" onChange={(e) => setFormData({ ...formData, nomor_registrasi: e.target.value })} className='form-input mb-3' />

                            <div className='mt-5'>
                                <h6 className='text-sm mb-2'>Munculkan di team</h6>
                                <input type='checkbox' checked={formData.is_show ? true : false} onChange={(e) => setFormData({ ...formData, is_show: e.target.checked})} />
                                <label className='ml-2'>Aktif</label>
                            </div>

                            <div className="mt-4">
                                {
                                    formData?.is_show  && <FormInput name='urut' label='Urut di list' value={formData.urutan} onChange={(e) => setFormData({ ...formData, urutan: e.target.value })} className='form-input mb-3' />
                                }
                            </div>

                              <div className="flex justify-between items-center">
                                <h4 className="card-title mb-1">Image</h4>
                            </div>

                            <FileUploader singleFile multipleUploads={false} onFileUpload={onFileUpload} icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text=" klik untuk upload." />

                        </div>
                        <div className='flex justify-end p-4 border-t gap-x-4'>
                            <button className='btn bg-light text-gray-800' onClick={() => setModal(false)}>Close</button>
                            <button className='btn bg-primary text-white'  onClick={postData}>Submit</button>
                        </div>

                    </div>
                </ModalLayout>
            )}
            <PageBreadcrumb title="Anggota" subName="Backoffice" />
            <div className='bg-white p-4'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Anggota</h3>
                    <button className='btn bg-primary mb-4 text-white' onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', image_file: '', is_active: 1 }); }}>Tambah Data</button>
                </div>
                <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
                <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={(val) => fetchData(val?.current_page as any + 1)} />
            </div>
        </>
    )
}

export default Index
