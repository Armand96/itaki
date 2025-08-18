import { APICore } from "./apiCore";

const api = new APICore()

function PostGenerals(body: any, update: any = "") {
    return api.createWithFile(`api/admin/post${update && `/${update}`}`, body)
}

function PostDocumentGenerals(body: any, update: any = "") {
    return api.createWithFile(`api/admin/document${update && `/${update}`}`, body)
}

function getDocumentGenerals(params:any = "") {
    const baseUrl = `api/admin/document${params}`
    return api.get(baseUrl).then((res) => res.data)
}

function getGenerals(params:any = "") {
    const baseUrl = `api/admin/post${params}`
    return api.get(baseUrl).then((res) => res.data)
}

export { PostGenerals, getGenerals, getDocumentGenerals, PostDocumentGenerals }
