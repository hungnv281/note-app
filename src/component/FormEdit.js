import {  Form, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";

const FormEdit = (props) => {
  const { isModalEditVisible, handleEdit, item, handleCancel } = props;
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(isModalEditVisible);
  const onEdit = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
    handleEdit(values);
  };

  return (
    <Modal
      visible={visible}
      title="Edit data"
      okText="Edit"
      cancelText="Cancel"
      onCancel={handleCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onEdit(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
          title: item.id,
          name: item.name,
          content: item.content,
        }}
      >
        <Form.Item
          name="title"
          label="title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
              message: "Please input the name of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="content"
          rules={[
            {
              required: true,
              message: "Please input the content of collection!",
            },
          ]}
        >
          <TextArea  showCount/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormEdit;
