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
};

export default FetchData
