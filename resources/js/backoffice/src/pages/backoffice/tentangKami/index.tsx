import { useState } from 'react';
import { PageBreadcrumb } from '../../../components';
import TablePaginate from '../../../components/Table/tablePaginate';
import LoadingScreen from '../../../components/Loading/loading';
import { ModalAdd } from './ModalAdd';
import ModalPreviewMulti from '../../../components/ModalPreviewImage/ModalPreviewMulti';


const Index = () => {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({ name: '', value: '', is_active: 1 });
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [dataPaginate, setDataPaginate] = useState<any>({
        data: [
            {
                title: "Sejarah ITAKI"
            },
            {
                title: "Visi"
            },
            {
                title: "Misi"
            },
            {
                title: "Struktur Anggota"
            },
            {
                title: "Kode Etik Perushaan"
            },
        ]
    });
    const [previewImage, setPreviewImage] = useState(false)


    const columns = [
        { name: 'Nama', row: (cell: any) => <div className='w-[200px] text-wrap'>{cell.title}</div> },
        {
            name: 'Action', row: (cell: any) => (
                <div className="flex gap-x-3">
                    <button className='btn bg-primary text-white' onClick={() => { setModal(true); setFormData(cell); setIsCreate(false); }}>
                        Edit
                    </button>
                </div>
            )
        }
    ];


    return (
        <>
            {loading && <LoadingScreen />}
            <ModalPreviewMulti toggleModal={() => setPreviewImage(false)} isOpen={previewImage} img={formData?.images} />
            {modal && (
                <ModalAdd  isCreate={isCreate} toggleModal={() => setModal(false)} isOpen={modal} setLoading={setLoading} detailData={formData} />
            )}
            <PageBreadcrumb title='Tentang Kami' subName='Backoffice' />
            <div className='bg-white p-4 '>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Tentang Kami </h3>
                </div>

                <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
                <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns}  />
            </div>
        </>
    );
};

export default Index;
