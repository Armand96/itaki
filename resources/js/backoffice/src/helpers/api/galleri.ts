import { APICore } from "./apiCore";

const api = new APICore()

function postGalleri(body: any, update: any = "") {
    return api.createWithFile(`api/admin/gallery${update && `/${update}`}`, body)
}


function getGalleri(params:any = "") {
    const baseUrl = `api/admin/gallery${params}`
    return api.get(baseUrl).then((res) => res.data)
}

export { postGalleri, getGalleri }
