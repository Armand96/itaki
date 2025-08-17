import { APICore } from "./apiCore";

const api = new APICore()

function PostAnggota(body: any, update: any = "") {
    return api.createWithFile(`api/admin/daftar_anggota${update && `/${update}`}`, body)
}


function getAnggota(params:any = "") {
    const baseUrl = `api/admin/daftar_anggota${params}`
    return api.get(baseUrl).then((res) => res.data)
}

export { PostAnggota, getAnggota }
