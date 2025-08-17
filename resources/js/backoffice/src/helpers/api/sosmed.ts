import { APICore } from "./apiCore";

const api = new APICore()

function PostSosmed(body: any, update: any = "") {
    return api.createWithFile(`api/admin/sosmed${update && `/${update}`}`, body)
}


function getSosmed(params:any = "") {
    const baseUrl = `api/admin/sosmed${params}`
    return api.get(baseUrl).then((res) => res.data)
}

export { PostSosmed, getSosmed }
