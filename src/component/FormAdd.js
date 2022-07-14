import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";

const CollectionCreateForm = ({ visible, onCreate, onCancel }, props) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
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
              <TextArea />
            </Form.Item>
        
      </Form>
    </Modal>
  );
};

const FormAdd = (props) => {
  const [visible, setVisible] = useState(false);
  const { handleCreate } = props;

  const onCreate = (values) => {
    setVisible(false);
    handleCreate(values);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Collection
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default FormAdd;
