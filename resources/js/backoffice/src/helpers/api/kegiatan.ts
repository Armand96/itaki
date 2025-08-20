import { APICore } from "./apiCore";

const api = new APICore()

function PostKegiatan(body: any, update: any = "") {
    return api.create(`api/admin/kegiatan${update && `/${update}`}`, body)
}


function getKegiatan(params:any = "") {
    const baseUrl = `api/admin/kegiatan${params}`
    return api.get(baseUrl).then((res) => res.data)
}

function getKegiatanEnum(params:any = "") {
    const baseUrl = `api/kegiatan_enum${params}`
    return api.get(baseUrl).then((res) => res.data)
}






export { PostKegiatan, getKegiatan, getKegiatanEnum }
