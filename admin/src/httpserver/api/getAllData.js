import { get, post } from "../interceptors/axios.js";

export function getAllData(param) {
  const result = get("/show.do", param);
  return result;
}
export function getOutExcel(param) {
  const result = post("/selectedDownloadExcel2003.do", param);
  return result;
}
