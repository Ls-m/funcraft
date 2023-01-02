import { Collapse, Typography, Upload } from "antd";
// import "./comonents/avatar.css";
import React from "react";
import axios from "axios";
import "antd/dist/antd.js";
import { CaretRightFilled } from "@ant-design/icons";
import NavbarComponent from "../../NavbarComponent";
export default function AvatarPage() {
  const uploadImage = (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        console.log((event.loaded / event.total) * 100);
        onProgress({ percent: (event.loaded / event.total) * 100 }, file);
      },
    };
    fmData.append("image", file);
    axios
      .post("http://localhost:4000/upload", fmData, config)
      .then((res) => {
        onSuccess(file);
        console.log(res);
      })
      .catch((err) => {
        const error = new Error("Some error");
        onError({ event: error });
      });
  };
  return (
    <>
    <NavbarComponent/>
    <div className="App">
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
                آواتار را آپلود کنید <br />
              </h6>
            </div>

            <button type="button" class="btn btn-success">
              {" "}
              آپلود آواتار{" "}
            </button>
          </Upload.Dragger>
        </div>{" "}
      </Typography.Text>
    </div>
    </>
  );
}
