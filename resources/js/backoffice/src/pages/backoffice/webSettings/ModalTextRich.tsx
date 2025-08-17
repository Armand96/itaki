import { ModalLayout } from "../../../components/HeadlessUI";
import { useState } from "react";

interface ModalAddTypes {
    isOpen: boolean,
    toggleModal: () => void,
    isCreate: boolean,
    handlePost: (parms: any) => void,
    detailData: any,
    reloadData: () => void
    setLoading: (loading: any) => void,
}

export const ModalTextRich = ({ isOpen, toggleModal, isCreate, detailData, setLoading, reloadData }: ModalAddTypes) => {
    const [formData, setFormData] = useState<any>({
        description: '',
    })




    return (
        <ModalLayout showModal={isOpen} toggleModal={() => toggleModal()} placement='justify-center items-start'>
            <div className='m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded'>

                <div className='flex justify-between items-center py-2.5 px-4 border-b'>
                    <h3 className='text-lg'>Edit Data</h3>
                    <button className='h-8 w-8' onClick={() => toggleModal()}>
                        <i className='ri-close-line text-2xl' />
                    </button>
                </div>

                <div className='p-4 overflow-y-auto  w-[70vw]'>
                    <div className="mb-20">

                    </div>

                </div>


                <div className='flex justify-end p-4 border-t gap-x-4'>
                    <button className='btn bg-light text-gray-800' onClick={() => toggleModal()}>Close</button>
                    <button className='btn bg-primary text-white' onClick={() => null}>Submit</button>
                </div>
            </div>
        </ModalLayout>
    )
}
