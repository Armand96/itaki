import { useState } from 'react';
import { ModalLayout } from '../../../components/HeadlessUI';
import { FileUploader } from '../../../components';
import { Products } from '../../../dto/products';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import cloneDeep from 'clone-deep';
import Swal from 'sweetalert2';


interface ModalAddTypes {
  isOpen: boolean,
  toggleModal: () => void,
  isCreate: boolean,
  setLoading: (loading: any) => void,
  detailData: Products,
  reloadData: () => void
}

export const ModalAdd = ({ isOpen, toggleModal, isCreate, setLoading, detailData, reloadData }: ModalAddTypes) => {
  const [formData, setFormData] = useState<any>({
    name: '',
    brand: '',
    description: '',
    release_date: '',
    price: 0,
    link: []
  })
  const [imageDelete, setImageDelete] = useState<any>([])
  const [oldImages, setOldImages] = useState<any>([])




  const postData = async () => {
    try {
      setLoading(true);

    //   const category_id = selectedSubCategories.value ? parseInt(selectedSubCategories.value) : parseInt(selectedCategories.value);

    //   const postData: PostProductsTypes = {
    //     name: formData.name,
    //     description: formData.description,
    //     brand: formData.brand,
    //     release_date: formData.release_date,
    //     price: formData.price,
    //     stock: formData.stock,
    //     is_active: 1,
    //     category_id,
    //     _method: formData?.id ? "PUT" : "POST"
    //   };

    //   let response;
    //   response = await PostProducts(postData, formData.id)

    //   if (response?.data?.data?.id) {
    //     const productId = response.data.data.id;




    //     if (formData.image_files?.length > 0) {
    //       const uploadImagesSequentially = async () => {
    //         for (const file of Array.from(formData.image_files)) {
    //           await new Promise((resolve) => {
    //             setTimeout(async () => {
    //               await PostProductImages({
    //                 product_id: productId,
    //                 image_file: file,
    //               });
    //               resolve(null);
    //             }, 1000);
    //           });
    //         }
    //       };


    //       await uploadImagesSequentially();

    //     }

    //     await deleteOldLink.map((id) => {
    //       PostDeleteOLdLink({
    //         '_method': 'DELETE'
    //       }, id)
    //     })

    //     if (formData.link.length > 0) {

    //       if (detailData) {
    //         console.log(deleteOldLink)
    //         const imageLinks = formData.link?.filter((link) => !link.id)?.map((item) => {
    //           PostProductLink({
    //             link: item?.link,
    //             link_type_id: item?.detail?.id,
    //             product_id: productId,
    //             variant_id: 0
    //           })
    //         })

    //         await Promise.all(imageLinks);

    //       } else {
    //         await formData.link?.map((item) => {
    //           PostProductLink({
    //             link: item?.link,
    //             link_type_id: item?.detail?.id,
    //             product_id: productId,
    //             variant_id: 0
    //           })
    //         })

    //       }

    //     }


    //     await imageDelete.map((id) => {
    //       PostDeleteProductImage({
    //         '_method': 'DELETE'
    //       }, id)
    //     })

    //   }

      toggleModal();
      Swal.fire('Success', detailData ? 'Edit Product berhasil' : 'Input Product berhasil', 'success');
      reloadData();
    } catch (error) {
      Swal.fire('Error', error.message || 'Terjadi kesalahan', 'error');
    } finally {
      setLoading(false);
    }
  };


  const newFileDelete = (index: any) => {
    let prevData = cloneDeep(formData.image_files)
    prevData.splice(index, 1)
    setFormData({ ...formData, image_files: prevData })
  }

  const onFileUpload = (images: any) => {
    let temp: any = []
    images.forEach((image) => {
      temp.push(image)
    })
    setFormData({ ...formData, image_files: temp })
  }

  const handlePrevImage = (parms, idx) => {
    let prevData = cloneDeep(oldImages)
    prevData.splice(idx, 1)
    setOldImages(prevData)
    setImageDelete([...imageDelete, parms ])

  }

  const modules = {
    toolbar: [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'clean']],
  }

  const handleDesc = (value: string, delta: any) => {

    if (!delta || !delta.ops || formData.description == value ) return;


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

          <div className="mb-20">
            <div className="flex justify-between items-center">
              <h4 className="card-title">Deskripsi</h4>
            </div>

            <div className="pt-3">
              <ReactQuill defaultValue={  `input deskripsi disini`} theme="snow" modules={modules} style={{ height: 300 }}    value={formData.description} onChange={handleDesc} />
            </div>
          </div>


          {!isCreate && (
            <div className='mb-2'>
              <h6 className='text-sm mb-2'>Status *</h6>
              <input type='checkbox' checked={formData.is_active === 1 ? true : false} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked ? 1 : 0 })} />
              <label className='ml-2'>Aktif</label>
            </div>
          )}

          <div className='mb-2' >
            <label className="mb-2" htmlFor="choices-text-remove-button">
              Upload Image (max ukuran image {import.meta.env.VITE_REACT_APP_MAX_UPLOAD_SIZE}MB)
            </label>
            <FileUploader onFileDelete={newFileDelete} detailData={detailData} handleDeletePrevImage={handlePrevImage} prevData={oldImages} maxSizeParms={2} onFileUpload={onFileUpload} icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text=" klik untuk upload. " />

          </div>

        </div>
        <div className='flex justify-end p-4 border-t gap-x-4'>
          <button className='btn bg-light text-gray-800' onClick={() => toggleModal()}>Close</button>
          <button className='btn bg-primary text-white'  onClick={postData}>Submit</button>
        </div>
      </div>
    </ModalLayout>
  )
}
