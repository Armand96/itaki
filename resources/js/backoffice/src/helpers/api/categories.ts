import { APICore } from "./apiCore";

const api = new APICore()

function PostCategories(body: any, update: any = "") {
    return api.createWithFile(`api/admin/kategori${update && `/${update}`}`, body)
}


function getCategories(params:any = "") {
    const baseUrl = `api/admin/kategori${params}`
    return api.get(baseUrl).then((res) => res.data)
}

export { PostCategories, getCategories }
