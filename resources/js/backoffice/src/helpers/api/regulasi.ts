import { APICore } from "./apiCore";

const api = new APICore()

function PostRegulasi(body: any, update: any = "") {
    return api.createWithFile(`api/admin/regulasi${update && `/${update}`}`, body)
}


function getRegulasi(params:any = "") {
    const baseUrl = `api/admin/regulasi${params}`
    return api.get(baseUrl).then((res) => res.data)
}




export { PostRegulasi, getRegulasi }
