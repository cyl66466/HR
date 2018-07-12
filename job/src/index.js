import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/home.js";
import "./index.less";
import "antd/dist/antd.css";
import { LocaleProvider } from "antd"; //以下三句实现全局使用中文化的文案
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Home />
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
