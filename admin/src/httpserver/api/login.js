import { post } from "../interceptors/axios.js";

export function login(param) {
  const result = post("/login.do", param);
  return result;
}
