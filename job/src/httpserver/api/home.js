import { post } from "../interceptors/axios.js";

export function uploadData(param) {
  const result = post("/submit.do", param);
  return result;
}
