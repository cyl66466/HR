//引入axios
import axios from "axios";
import qs from "qs";
import { message } from "antd";
import apiData from "./../../constants/api.js";
//请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    /*    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        // 序列化
        config.data = qs.stringify(config.data);

    }*/
    // console.log(config.data);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "400:错误请求";
          break;
        case 401:
          /*error.message = '登录失效,请重新登录';*/
          message.warning("登录失效,请重新登录");
          window.location.href = "/login";
          break;
        case 403:
          error.message = "403:拒绝访问";
          break;
        case 404:
          error.message = "404:请求错误,未找到该资源";
          break;
        case 405:
          error.message = "405:请求方法未允许";
          break;
        case 408:
          error.message = "408:请求超时";
          break;
        case 500:
          error.message = "500:服务器端出错";
          break;
        case 501:
          error.message = "501:网络未实现";
          break;
        case 502:
          error.message = "502:网络错误";
          break;
        case 503:
          error.message = "503:服务不可用";
          break;
        case 504:
          error.message = "504:网络超时";
          break;
        case 505:
          error.message = "505:http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    return Promise.reject(error);
  }
);

/*axios.defaults.baseURL = 'http://192.168.128.170:8123';*/
axios.defaults.baseURL = apiData.url;

axios.defaults.timeout = 10000;

//get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: {
          /*"Accept": "application/json",
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/json',*/
          Authorization: sessionStorage.getItem("token") || ""
        },
        dataType: "jsonp"
      })
      .then(res => {
        // console.log(res);
        if (res.status === 200) {
          if (res.data.status === 1) {
            resolve(qs.parse(res.data));
          } else {
            resolve(qs.parse(res.data));
            // reject(res.data.msg || res.data);
          }
        }
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
export function postloading(url, params) {
  let hide = message.loading("", 0);
  setTimeout(hide, 500);
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: {
          Authorization: sessionStorage.getItem("token") || ""
        },
        dataType: "jsonp"
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          if (res.data.status === 200) {
            const token = res.data.token;
            if (token) {
              sessionStorage.setItem("token", "Bearer " + token);
            }
            resolve(qs.parse(res.data));
          } else {
            reject(res.data.msg || res.data);
          }
        }
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

export function postdownload(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: {
          Authorization: sessionStorage.getItem("token") || ""
        },
        responseType: "blob"
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
//轮询post请求
export function postpop(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: {
          /*"Accept": "application/json",
                     'Content-Type': 'application/x-www-form-urlencoded',
                     'Content-Type': 'application/json',*/
          Authorization: sessionStorage.getItem("token") || ""
        },
        dataType: "jsonp"
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          if (res.data.status === 200) {
            resolve(qs.parse(res.data));
          } else {
            reject(res.data.msg || res.data);
          }
        }
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
//设置默认请求头
// axios.defaults.headers = {
// "Access-Control-Allow-Origin": "*"
// Accept: "application/json",
//  'content-type':'text/plain;charset=UTF-8',
// "X-Requested-With": "XMLHttpRequest"
// };
/*    // 跳转登录
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }*/
