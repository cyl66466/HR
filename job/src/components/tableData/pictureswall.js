import React from "react";
import { Upload, Form, Icon, Modal, message } from "antd";
import "./../../style/tableData/pictureswall.less";
import apiData from "./../../constants/api.js";
const FormItem = Form.Item;

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: []
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });
  beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 0.12;
    message.config({
      duration: 4,
      maxCount: 2
    });
    if (!isLt2M) {
      message.error("照片大小不能超过120kb,请删除并重新上传！");
    }
    return isLt2M;
  }
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList, file }) => {
    if (file.response) {
      this.props.event(file.response.data, "photo");
    }
    this.setState({ fileList });
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">照片格式详见本栏红色备注</div>
      </div>
    );
    return (
      <FormItem label="上传证件照" required="true">
        <div className="fixd-size">
          <Upload
            action={apiData.url + "upload.do"}
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            beforeUpload={file => this.beforeUpload(file)}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img className="modal-img" alt="example" src={previewImage} />
          </Modal>
        </div>
      </FormItem>
    );
  }
}

export default PicturesWall;
