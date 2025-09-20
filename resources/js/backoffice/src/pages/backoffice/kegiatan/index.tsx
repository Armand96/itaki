// components

import { useEffect, useState } from 'react';
import { FileUploader, FormInput, PageBreadcrumb } from '../../../components';
import Swal from 'sweetalert2';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalLayout } from '../../../components/HeadlessUI';
import TablePaginate from '../../../components/Table/tablePaginate';
import { getCategories, getKegiatan, getKegiatanEnum, getPublikasiIlmiah, PostKegiatan, PostPublikasiIlmiah } from '../../../helpers';
import dayjs from 'dayjs';
import Select from 'react-select';
import { HelperFunction } from '../../../helpers/HelpersFunction';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ResizeModule from '@botom/quill-resize-module';


Quill.register("modules/resize", ResizeModule);


const Index = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ is_active: 1 });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>(null);
    const [kategoriOptions, setKategoriOptions] = useState<any>([])
    const [selectedKategori, setSelectedKategori] = useState<any>()

    const fetchData = async (page = 1) => {
        setLoading(true);
        const res: any[] = await getKegiatan(`?page=${page}`);
        setDataPaginate(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
        getKegiatanEnum(``).then((res) => {
            setKategoriOptions(HelperFunction.FormatOptions(res, 'key', 'value'))
        })
    }, [])

    const postData = async () => {
        setLoading(true);
        const data = { ...formData, status_event: formData?.status_event ? 1 : 0, name: formData?.judul, tgl_event: dayjs(formData?.tgl_event).format("YYYY-MM-DD"), kategori: selectedKategori?.value || formData?.kategori, _method: formData.id ? 'PUT' : 'POST' };
        await PostKegiatan(data, formData?.id).then(() => {
            setModal(false);
            Swal.fire('Success', formData.id ? 'Update Kegiatan Berhasil' : 'Input Kegiatan Berhasil', 'success');
        }).catch((err) => {
            setModal(false);
            console.log(err)
            Swal.fire('Error', err.name[0], 'error');
        })
        await fetchData();
        setModal(false);
    };

    const columns = [
        { name: 'Kegiatan', row: (cell: any) => <div  className="w-[300px] whitespace-normal" style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{cell.judul}</div> },
        { name: 'Jenis Event', row: (cell: any) => <div>{cell.kategori}</div> },
        { name: 'Deksripsi singkat', row: (cell: any) => <div>{cell.short_desc}</div> },
        { name: 'Tanggal Event', row: (cell: any) => <div>{cell.tgl_event}</div> },
        { name: 'Status Event', row: (cell: any) => <div>{cell?.status_event ? "sedang berjalan" : "sudah selesai / belum berjalan"}</div> },
                { name: 'Status', row: (cell: any) => <div>{cell?.is_active == 1 ? "Aktif" : "tidak aktif"}</div> },

        {
            name: 'Action', row: (cell: any) => (
                <button className='btn bg-primary text-white' onClick={() => handleEdit(cell)}>
                    Edit
                </button>
            )
        }
    ];

    const handleEdit = (evt) => {
        setModal(true);
        setSelectedKategori(kategoriOptions?.filter((item) => item.label === evt?.kategori)[0])
        delete evt.cover_image
         delete evt.cover_image_thumb

        setFormData(evt);
        setIsCreate(false);
    }




    const modules = {
        toolbar: [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }],
        ],
    }

    const handleDesc = (value: string, delta: any) => {
        if (!delta || !delta.ops || formData.detail == value) return;
        setFormData({ ...formData, detail: value })
    }

    const onFileUpload = (val: any) => {
        console.log(val)
        setFormData({ ...formData, image: val[0] })
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
                            <FormInput name='Judul' label='judul' value={formData.judul} onChange={(e) => setFormData({ ...formData, judul: e.target.value })} className='form-input mb-3' />
                            <div className="mt-4">

                                <div className='mb-2'>
                                    <h6 className='text-sm mb-2'>Status</h6>
                                    <input type='checkbox' checked={formData.status_event} onChange={(e) => setFormData({ ...formData, status_event: e.target.checked })} />
                                    <label className='ml-2'>Sedang berjalan</label>
                                </div>

                            </div>

                            <FormInput name='Judul' label='Deksripsi singkat' value={formData.short_desc} onChange={(e) => setFormData({ ...formData, short_desc: e.target.value })} className='form-input mb-3' />
                            <FormInput name='Judul' label='Tanggal Event' type='date' value={formData.tgl_event} onChange={(e) => setFormData({ ...formData, tgl_event: e.target.value })} className='form-input mb-3' />
                            <div className='mb-2'>
                                <label className="mb-2" htmlFor="choices-text-remove-button">
                                    Kategori
                                </label>
                                <Select className="select2 z-5" options={kategoriOptions} value={selectedKategori} onChange={(e) => setSelectedKategori(e)} />
                            </div>

                      <FormInput name='link_video' label='Link Video' value={formData.url_video} onChange={(e) => setFormData({ ...formData, url_video: e.target.value })} className='form-input mb-3' />

                            <div className="flex justify-between items-center">
                                <h4 className="card-title mb-1">Image</h4>
                            </div>

                            <FileUploader  required={true} acceptedTypes={["image/jpeg", "image/jpg", "image/png"]} singleFile multipleUploads={false} onFileUpload={onFileUpload} icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text=" klik untuk upload." />

                            <div className={`mt-6 mb-20`} >
                                <div className="flex justify-between items-center">
                                    <h4 className="card-title">Deskripsi</h4>
                                </div>

                                <div className="pt-3">
                                    <ReactQuill defaultValue={`input deskripsi disini`} theme="snow" modules={modules} style={{ height: 300 }} value={formData.detail} onChange={handleDesc} />
                                </div>
                            </div>

                            {!isCreate && (
                                <div className='mb-2'>
                                    <h6 className='text-sm mb-2'>Status</h6>
                                    <input type='checkbox' checked={formData.is_active === 1 ? true : false} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })} />
                                    <label className='ml-2'>Aktif</label>
                                </div>
                            )}

                        </div>




                        <div className='flex justify-end p-4 border-t gap-x-4'>
                            <button className='btn bg-light text-gray-800' onClick={() => setModal(false)}>Close</button>
                            <button className='btn bg-primary text-white' disabled={!formData?.judul || !selectedKategori?.value || !formData?.short_desc || !formData?.tgl_event || !formData?.detail } onClick={postData}>Submit</button>
                        </div>
                    </div>
                </ModalLayout>
            )}
            <PageBreadcrumb title="Kegiatan" subName="Backoffice" />
            <div className='bg-white p-4'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Kegiatan</h3>
                    <button className='btn bg-primary mb-4 text-white' onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', is_active: 1 }); }}>Tambah Data</button>
                </div>
                <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={(val) => fetchData(val?.current_page as any + 1)} />
            </div>
        </>
    )
}

export default Index
