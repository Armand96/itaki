import { APICore } from "./apiCore";

const api = new APICore()

function PostListKlien(body: any, update: any = "") {
    return api.createWithFile(`api/admin/client${update && `/${update}`}`, body)
}

function getKlien(params:any = "") {
    const baseUrl = `api/admin/client${params}`
    return api.get(baseUrl).then((res) => res.data)
}

function DeleteListKlien(body: any, update: any = "") {
    return api.createWithFile(`api/admin/client${update && `/${update}`}`, body)
}


export { PostListKlien, getKlien, DeleteListKlien}
