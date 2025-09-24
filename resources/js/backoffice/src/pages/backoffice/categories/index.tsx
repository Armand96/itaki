// components

import { useEffect, useState } from 'react';
import { FormInput, PageBreadcrumb } from '../../../components';
import { LinkType } from '../../../dto/link_type';
import { getLinkType, postLinkType } from '../../../helpers/api/linkType';
import Swal from 'sweetalert2';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalLayout } from '../../../components/HeadlessUI';
import TablePaginate from '../../../components/Table/tablePaginate';
import ModalPreview from '../../../components/ModalPreviewImage/ModalPreview';
import Select from 'react-select';
import { getCategories, PostCategories } from '../../../helpers';

const Index = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ nama_kategori: '', menu_tujuan: '', is_active: 1 });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>(null);
    const [sectionOptions, setSectionOptions] = useState([
        { label: "Galleri", value: "Galleri" },
        { label: "Regulasi", value: "Regulasi" }

    ])

    const [selectedSections, setSelectedSections] = useState<any>(null)
    const [previewImage, setPreviewImage] = useState(false)

    const fetchData = async (page = 1) => {
        setLoading(true);
        const res: LinkType[] = await getCategories(`?page=${page}`);
        setDataPaginate(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const postData = async () => {
        setLoading(true);
        const data = { ...formData, menu_tujuan: selectedSections?.value, _method: formData.id ? 'PUT' : 'POST' };
        await PostCategories(data, formData?.id).then(() => {
            setModal(false);
            setSelectedSections(null)
            Swal.fire('Success', formData.id ? 'Update Categories Berhasil' : 'Input Categories Berhasil', 'success')
        }).catch((err) => {
            setModal(false);
            console.log(err)
            Swal.fire('Error', err, 'error');
        })
        await fetchData();
    };

    const columns = [
        { name: 'Nama', row: (cell: any) => <div>{cell.nama_kategori}</div> },
        { name: 'Section', row: (cell: any) => <div>{cell.menu_tujuan}</div> },
        {
            name: 'Action', row: (cell: any) => (
                <button className='btn bg-primary text-white' onClick={() => { setModal(true); setFormData(cell); setIsCreate(false); setSelectedSections(sectionOptions?.filter((x) => x.value === cell?.menu_tujuan)) }}>
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
                <ModalLayout showModal={modal} toggleModal={() =>{ setModal(false);            setSelectedSections(null)}} placement='justify-center items-start' >
                    <div className='m-3 sm:mx-auto flex flex-col bg-white shadow-sm '>
                        <div className='flex justify-between items-center py-2.5 px-4 border-b'>
                            <h3 className='text-lg'>{isCreate ? 'Tambah Data' : 'Edit Data'}</h3>
                            <button className='h-8 w-8' onClick={() => setModal(false)}>
                                <i className='ri-close-line text-2xl' />
                            </button>
                        </div>
                        <div className='p-4 h-[30vh] overflow-y-auto w-[70vw]'>
                            <FormInput required name='name' label='Nama' value={formData.nama_kategori} onChange={(e) => setFormData({ ...formData, nama_kategori: e.target.value })} className='form-input mb-3' />
                            <div className='mb-2'>
                                <label className="mb-2" htmlFor="choices-text-remove-button">
                                    Sections *
                                </label>
                                <Select  className="select2 z-5" options={sectionOptions} value={selectedSections} onChange={(e) => setSelectedSections(e)} />
                            </div>
                        </div>
                        <div className='flex justify-end p-4 border-t gap-x-4'>
                            <button className='btn bg-light text-gray-800' onClick={() => setModal(false)}>Close</button>
                            <button className='btn bg-primary text-white' disabled={!selectedSections?.value || !formData?.nama_kategori} onClick={postData}>Submit</button>
                        </div>
                    </div>
                </ModalLayout>
            )}
            <PageBreadcrumb title="Categories" subName="Backoffice" />
            <div className='bg-white p-4'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Categories</h3>
                    <button className='btn bg-primary mb-4 text-white'  onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', image_file: '', is_active: 1 }); }}>Tambah Data</button>
                </div>
                <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
                <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={(val) => fetchData(dataPaginate?.current_page + 1 == dataPaginate?.last_page ? 1 : dataPaginate?.current_page + 1)}/>
            </div>
        </>
    )
}

export default Index
