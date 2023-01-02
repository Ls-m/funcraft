import { Collapse, Typography, Upload } from "antd";
import React from "react";
import axios from "axios";
// import "../node_modules/antd/dist/antd.js";
import { CaretRightFilled } from "@ant-design/icons";
// import Avatar from "./avatar.js";
// import { Button } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
import './upload.css'
import NavbarComponent from "../../NavbarComponent";


export default function UploadPage() {const uploadImage = options => {

  const { onSuccess, onError, file, onProgress } = options;

  const fmData = new FormData();
  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: event => {
      console.log((event.loaded / event.total) * 100);
      onProgress({ percent: (event.loaded / event.total) * 100 },file);
    }
  };
  fmData.append("image", file);
  axios
    .post("http://localhost:4000/upload", fmData, config)
    .then(res => {
      onSuccess(file);
      console.log(res);
    })
    .catch(err=>{
      const error = new Error('Some error');
      onError({event:error});
    });
}
  return (
    <>
    <NavbarComponent/>
    <div className="upload">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>نسخه جدید بازی</Accordion.Header>
          <Accordion.Body>
            <Typography.Text>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  // height: "100vh",
                }}
              >
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:3000/"}
                  customRequest={uploadImage}

                  showUploadList={{ showRemoveIcon: true }}
                  beforeUpload={(file) => {
                    console.log({ file });
                    return false;
                  }}
                  iconRender={() => {
                    return <spin></spin>;
                  }}
                  progress={{
                    strokeWidth: 3,
                    strokeColor: {
                      "0%": "f0f",
                      "100%": "ff0",
                    },
                    style: { top: 12 },
                  }}
                >
                
                  <div className="forchange">
                    <h6>
                      فایل یا فایل های مورد نظر خود را در اینجا رها کنید و یا از
                      طریق دکمه ی زیر اقدام به آپلود فایل کنید
                      <br />
                    </h6>
                  </div>

                  <button type="button" class="btn btn-success">
                    {" "}
                    آپلود فایل{" "}
                  </button>
                </Upload.Dragger>
              </div>{" "}
            </Typography.Text>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>آیکون بازی</Accordion.Header>
          <Accordion.Body>
            <Typography.Text>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  // height: "100vh",
                }}
              >
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:3000/"}
                  showUploadList={{ showRemoveIcon: true }}
                  beforeUpload={(file) => {
                    console.log({ file });
                    return false;
                  }}
                  iconRender={() => {
                    return <spin></spin>;
                  }}
                  progress={{
                    strokeWidth: 3,
                    strokeColor: {
                      "0%": "f0f",
                      "100%": "ff0",
                    },
                    style: { top: 12 },
                  }}
                >
                  <div className="forchange">
                    <h6>
                      فایل یا فایل های مورد نظر خود را در اینجا رها کنید و یا از
                      طریق دکمه ی زیر اقدام به آپلود فایل کنید
                      <br />
                    </h6>
                  </div>

                  <button type="button" class="btn btn-success">
                    {" "}
                    آپلود فایل{" "}
                  </button>
                </Upload.Dragger>
              </div>{" "}
            </Typography.Text>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="2">
        <Accordion.Item eventKey="2">
          <Accordion.Header>بنر بازی </Accordion.Header>
          <Accordion.Body>
            <Typography.Text>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  // height: "100vh",
                }}
              >
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:3000/"}
                  showUploadList={{ showRemoveIcon: true }}
                  beforeUpload={(file) => {
                    console.log({ file });
                    return false;
                  }}
                  iconRender={() => {
                    return <spin></spin>;
                  }}
                  progress={{
                    strokeWidth: 3,
                    strokeColor: {
                      "0%": "f0f",
                      "100%": "ff0",
                    },
                    style: { top: 12 },
                  }}
                >
                  <div className="forchange">
                    <h6>
                      فایل یا فایل های مورد نظر خود را در اینجا رها کنید و یا از
                      طریق دکمه ی زیر اقدام به آپلود فایل کنید
                      <br />
                    </h6>
                  </div>
                  <button type="button" class="btn btn-success">
                    {" "}
                    آپلود فایل{" "}
                  </button>
                </Upload.Dragger>
              </div>{" "}
            </Typography.Text>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>توتوریال بازی </Accordion.Header>
          <Accordion.Body>
            <Typography.Text>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  // height: "100vh",
                }}
              >
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:3000/"}
                  showUploadList={{ showRemoveIcon: true }}
                  beforeUpload={(file) => {
                    console.log({ file });
                    return false;
                  }}
                  iconRender={() => {
                    return <spin></spin>;
                  }}
                  progress={{
                    strokeWidth: 3,
                    strokeColor: {
                      "0%": "f0f",
                      "100%": "ff0",
                    },
                    style: { top: 12 },
                  }}
                >
                  <div className="forchange">
                    <h6>
                      فایل یا فایل های مورد نظر خود را در اینجا رها کنید و یا از
                      طریق دکمه ی زیر اقدام به آپلود فایل کنید
                      <br />
                    </h6>
                  </div>

                  <button type="button" class="btn btn-success">
                    {" "}
                    آپلود فایل{" "}
                  </button>
                </Upload.Dragger>
              </div>{" "}
            </Typography.Text>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Avatar/> */}

    </div>
    </>
    
  );

                }