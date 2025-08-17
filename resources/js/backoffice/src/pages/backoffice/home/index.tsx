import React, { useEffect, useState } from 'react';
import { FormInput, PageBreadcrumb } from '../../../components';
import TablePaginate from '../../../components/Table/tablePaginate';
import LoadingScreen from '../../../components/Loading/loading';
import { Size } from '../../../dto/size';
import { ModalAdd } from './ModalAdd';
import { Products } from '../../../dto/products';
import { HelperFunction } from '../../../helpers/HelpersFunction';
import ModalPreviewMulti from '../../../components/ModalPreviewImage/ModalPreviewMulti';
import { useDebounce } from 'use-debounce';
import Select from 'react-select';
import { getGenerals } from '../../../helpers/api/generalApis';


const Index = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({ name: '', value: '', is_active: 1 });
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [dataPaginate, setDataPaginate] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState(false)


  const fetchData = async (page = 1, name = undefined, category = undefined) => {
    setLoading(true);

    const res: any[] = await getGenerals(`?category=home`)
    setDataPaginate(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const columns = [
    { name: 'Nama', row: (cell: Products) => <div className='w-[200px] text-wrap'>{cell.title}</div> },
    {
      name: 'Action', row: (cell: Products) => (
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
        <ModalAdd reloadData={fetchData} isCreate={isCreate} toggleModal={() => setModal(false)} isOpen={modal} setLoading={setLoading} detailData={formData} />
      )}
      <PageBreadcrumb title='Home' subName='Backoffice' />
      <div className='bg-white p-4 '>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-bold'>Home</h3>
          {/* <button className='btn bg-primary mb-4 text-white' onClick={() => { setModal(true); setIsCreate(true); setFormData({ name: '', format_size: '', is_active: 1 }); }}>Tambah Data</button> */}
        </div>

        <p className='mb-2'>Total Data : {dataPaginate?.total}</p>
        <TablePaginate totalPage={dataPaginate?.last_page || 0} data={dataPaginate?.data} columns={columns} onPageChange={(val) => fetchData(val.selected + 1)} />
      </div>
    </>
  );
};

export default Index;
