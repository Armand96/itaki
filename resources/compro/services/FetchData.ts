import apiService from "./api"

const FetchData = {
    GetSambutan: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/sambutan${params}`);
        return res.data;
    },
    GetKlienList: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/list_client${params}`);
        return res.data;
    },
     GetSejarah: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/sejarah${params}`);
        return res.data;
    },
     GetVisi: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/visi${params}`);
        return res.data;
    },
    GetMisi: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/misi${params}`);
        return res.data;
    },
    GetKodeEtik: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/kode_etik${params}`);
        return res.data;
    },
     GetStrukturOrganisasi: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/struktur_organisasi${params}`);
        return res.data;
    },
    GetSertifikasi: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/sertifikasi${params}`);
        return res.data;
    },
    GetRegulasi: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/list_regulasi${params}`);
        return res.data;
    },
      GetPublikasi: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/list_karya_ilmiah${params}`);
        return res.data;
    },
      GetKategori: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/list_kategori${params}`);
        return res.data;
    },
       GetGalleri: async (params: string = '' ) => {
        const res = await apiService.getData(`api/client/gallery_with_category${params}`);
        return res.data;
    },
};

export default FetchData
