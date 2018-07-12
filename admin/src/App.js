import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Table from "./pages/table/table.jsx";
import ShowMsg from "./pages/message/message.jsx";
import Login from "./pages/login/login.jsx";
import "antd/dist/antd.css";

import { LocaleProvider } from "antd"; //以下三句实现全局使用中文化的文案
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import createHistory from "history/createHashHistory";
const history = createHistory();
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <div className="App">
          <Router history={history}>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/showTable" component={ShowMsg} />
              <Route path="/table" component={Table} />
            </div>
          </Router>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
