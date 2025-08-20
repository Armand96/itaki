import { useEffect, useState } from 'react';
import { PageBreadcrumb } from '../../../components';
import { FileUploader } from '../../../components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import cloneDeep from 'clone-deep';
import Swal from 'sweetalert2';
import { deleteGalleri, getGalleri, postGalleri } from '../../../helpers';
import LoadingScreen from '../../../components/Loading/loading';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [imageDelete, setImageDelete] = useState<any>([]);
  const [oldImages, setOldImages] = useState<any>([]);

  useEffect(() => {
    getGalleri("?category=sertifikasi").then((res) => {
      setOldImages(res?.data);
      setFormData({
        description: res?.data[0]?.description,
        oldDesc: true,
        id: res?.data[0]?.id,
      });
    });
  }, []);

  const postData = async () => {
    try {
      setLoading(true);

      if (formData?.image?.length > 0) {
        const uploadImagesSequentially = async () => {
          for (const file of Array.from(formData.image)) {
            await new Promise((resolve) => {
              setTimeout(async () => {
                await postGalleri({
                  category: "sertifikasi",
                  image: file,
                  description: formData?.description
                });
                resolve(null);
              }, 1000);
            });
          }
        };
        await uploadImagesSequentially();
      }

      await imageDelete.map((id) => {
        deleteGalleri({ '_method': 'DELETE' }, id)
      });

      Swal.fire('Success', `Edit Sertifikasi berhasil`, 'success');
    } catch (error: any) {
      Swal.fire('Error', error.message || 'Terjadi kesalahan', 'error');
    } finally {
      setLoading(false);
    }
  };

  const newFileDelete = (index: any) => {
    let prevData = cloneDeep(formData.image);
    prevData.splice(index, 1);
    setFormData({ ...formData, image: prevData });
  };

  const onFileUpload = (images: any) => {
    let temp: any = [];
    images.forEach((image) => {
      temp.push(image);
    });
    setFormData({ ...formData, image: temp });
  };

  const handlePrevImage = (parms: any, idx: number) => {
    let prevData = cloneDeep(oldImages);
    prevData.splice(idx, 1);
    setOldImages(prevData);
    setImageDelete([...imageDelete, parms]);
  };

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['direction', { align: [] }],
      ['link', 'clean']
    ],
  };

  const handleDesc = (value: string, delta: any) => {
    if (!delta || !delta.ops || formData.description == value) return;
    setFormData({ ...formData, description: value });
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <PageBreadcrumb title='Sertifikasi' subName='Backoffice' />
      <div className='bg-white p-4 '>
        <h3 className='text-2xl font-bold mb-6'>Sertifikasi</h3>

        {/* Upload Image */}
        <div className="mb-6">
          <label className="mb-2 block">
            Upload Image (max ukuran image {import.meta.env.VITE_REACT_APP_MAX_UPLOAD_SIZE}MB)
          </label>
          <FileUploader
            onFileDelete={newFileDelete}
            multipleUploads={false}
            detailData={formData}
            handleDeletePrevImage={handlePrevImage}
            prevData={oldImages}
            maxSizeParms={2}
            onFileUpload={onFileUpload}
            icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200"
            text=" klik untuk upload. "
          />
        </div>

        {/* Deskripsi */}
        <div className="mb-10">
          <h4 className="card-title mb-2">Deskripsi</h4>
          <ReactQuill
            defaultValue={`input deskripsi disini`}
            theme="snow"
            modules={modules}
            style={{ height: 300 }}
            value={formData.description}
            onChange={handleDesc}
          />
        </div>

        {/* Action Buttons */}
        <div className='flex justify-end gap-x-4 '>
          <button className='btn bg-primary text-white mt-14'  onClick={postData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
