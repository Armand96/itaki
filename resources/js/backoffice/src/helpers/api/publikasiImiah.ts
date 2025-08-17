import { APICore } from "./apiCore";

const api = new APICore()

function PostPublikasiIlmiah(body: any, update: any = "") {
    return api.createWithFile(`api/admin/karya_ilmiah${update && `/${update}`}`, body)
}


function getPublikasiIlmiah(params:any = "") {
    const baseUrl = `api/admin/karya_ilmiah${params}`
    return api.get(baseUrl).then((res) => res.data)
}

export { PostPublikasiIlmiah, getPublikasiIlmiah }
