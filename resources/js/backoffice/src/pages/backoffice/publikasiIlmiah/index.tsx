// components

import { useEffect, useState } from 'react';
import { FileUploader, FormInput, PageBreadcrumb } from '../../../components';
import Swal from 'sweetalert2';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalLayout } from '../../../components/HeadlessUI';
import TablePaginate from '../../../components/Table/tablePaginate';
import { getPublikasiIlmiah, PostPublikasiIlmiah } from '../../../helpers';
import dayjs from 'dayjs';
import { useDebounce } from 'use-debounce';

const Index = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ description: '', image: '', is_active: 1, category: "" });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>(null);
    const [search, setSearch] = useState<any>('')
    const [name] = useDebounce(search, 1000);

    const fetchData = async (page = 1, search = "") => {
        setLoading(true);
        const res: any[] = await getPublikasiIlmiah(`?page=${page}&judul=${search}`);
        setDataPaginate(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {

        fetchData(1, name);
    }, [name])

    const postData = async () => {
        setLoading(true);
        const data = { ...formData, tahun_terbit: dayjs(formData?.tahun_terbit).format("YYYY-MM-DD"), _method: formData.id ? 'PUT' : 'POST' };
        await PostPublikasiIlmiah(data, formData?.id).then(() => {
            setModal(false);
            Swal.fire('Success', formData.id ? 'Update Publikasi Ilmiah Berhasil' : 'Input Publikasi Ilmiah Berhasil', 'success');
        }).catch((err) => {
                    setModal(false);
                    setLoading(false)
                    console.log(err)
                    Swal.fire('Error', err, 'error');
                })
        await fetchData();
        setModal(false);
    };

    const columns = [
        { name: 'Judul', row: (cell: any) => <div className="w-[300px] whitespace-normal" style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{cell.judul}</div> },
        { name: 'Penerbit', row: (cell: any) => <div>{cell.penerbit}</div> },
        { name: 'Tahun Terbit', row: (cell: any) => <div>{cell.tahun_terbit}</div> },
        {
            name: 'File', row: (cell: any) => <button className='btn bg-success text-white' onClick={() => { window.open(import.meta.env.VITE_PUBLIC_URL_STORAGE + cell.file_path, '_blank') }}>
                Link
            </button>
        },
        { name: 'Status', row: (cell: any) => <div>{cell?.is_active ? "aktif" : "Tidak Aktif"}</div> },

        {
            name: 'Action', row: (cell: any) => (
                <button className='btn bg-primary text-white' onClick={() => handleEdit(cell)}>
                    Edit
                </button>
            )
        }
    ];

    const onFileUpload = (val: any) => {
        console.log(val)
        setFormData({ ...formData, file: val[0] })
    }

    const handleEdit = (evt) => {
        setModal(true);
        setFormData(evt);
        setIsCreate(false);

    }

    return (
        <>
            {loading && <LoadingScreen />}
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
                            <FormInput required name='Judul' label='judul' value={formData.judul} onChange={(e) => setFormData({ ...formData, judul: e.target.value })} className='form-input mb-3' />
                            <FormInput required name='Judul' label='Nama penerbit' value={formData.penerbit} onChange={(e) => setFormData({ ...formData, penerbit: e.target.value })} className='form-input mb-3' />
                            <FormInput required name='Judul' label='Tanggal Terbit' type='date' value={formData.tahun_terbit} onChange={(e) => setFormData({ ...formData, tahun_terbit: e.target.value })} className='form-input mb-3' />

                            <div className="flex justify-between items-center">
                                <h4 className="card-title mb-1">File *</h4>
                            </div>

                            <FileUploader
                                singleFile
                                multipleUploads={false}
                                onFileUpload={onFileUpload}
                                icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200"
                                text=" klik untuk upload PDF."
                                required={true}
                                 acceptedTypes={["application/pdf"]}   // ✅ hanya bisa pilih PDF
                                onFileDelete={(index: any) => {
                                    throw new Error('Function not implemented.');
                                }}
                                handleDeletePrevImage={(parms: any, idx: any) => {
                                    throw new Error('Function not implemented.');
                                }}
                                detailData={undefined}
                            />

                            <div className="mt-4">
                                {!isCreate && (
                                    <div className='mb-2'>
                                        <h6 className='text-sm mb-2'>Status</h6>
                                        <input type='checkbox' checked={formData.is_active === 1 ? true : false} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })} />
                                        <label className='ml-2'>Aktif</label>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className='flex justify-end p-4 border-t gap-x-4'>
                            <button className='btn bg-light text-gray-800' onClick={() => setModal(false)}>Close</button>
                            <button className='btn bg-primary text-white' onClick={postData}>Submit</button>
                        </div>
                    </div>
                </ModalLayout>
            )}
            <PageBreadcrumb title="Publikasi Ilmiah" subName="Backoffice" />
            <div className='bg-white p-4'>
                <h3 className='text-lg mb-2'>Search</h3>
                <div className="mb-3 bg-gray-50 px-4 py-6 flex ">
                    <div className="flex gap-x-6">
                        <FormInput label="Judul" type="input" containerClass="mb-3" labelClassName="mb-2" className="form-input w-[200px]" value={search} onChange={(v) => setSearch(v.target.value)} name={'search'} />
                    </div>

                </div>

                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Publikasi Ilmiah</h3>
                    <button className='btn bg-primary mb-4 text-white' onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', is_active: 1 }); }}>Tambah Data</button>
                </div>
                <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
                <TablePaginate current_page={dataPaginate?.current_page} totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={fetchData} />
            </div>
        </>
    )
}

export default Index
