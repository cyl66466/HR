let checkIsStorage = () => {
  if (!window.localStorage) {
    console.log("浏览器不支持本地存储！");
    return false;
  } else {
    return true;
  }
};
let storage = {
  exist: (key, value) => {
    if (checkIsStorage()) {
      localStorage.setItem(key, value);
      // console.log("浏览器支持本地存储！存");
      return true;
    }
  },
  take: key => {
    let val;
    if (checkIsStorage()) {
      val = localStorage.getItem(key);
      // console.log("浏览器支持本地存储！取");
      return val;
    }
  },
  delete: key => {
    if (checkIsStorage()) {
      localStorage.removeItem(key);
      // console.log("浏览器支持本地存储！删");
      return true;
    }
  }
};
export default storage;
