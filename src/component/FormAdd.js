import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

const CollectionCreateForm = ({ visible, onCreate, onCancel }, props) => {
  const [form] = Form.useForm();
  //   const showStudentEdit = useCallback(
  //     (record) => {
  //       console.log(record.key, "   record   ", record);
  //       form.setFieldsValue({
  //         // key: record.key,
  //         name: record.name,
  //         age: record.age,
  //         address: record.address,
  //         description: record.description,
  //         email: record.email,
  //         gender: record.gender,
  //       });
  //     },
  //     [form]
  //   );
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
        {/* <Form.List name="name"> */}
            <Form.Item
              name="title"
              label="title"
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
              name="first"
              label="first name"
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
              name="last"
              label="last name"
              rules={[
                {
                  required: true,
                  message: "Please input the name of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
        {/* </Form.List> */}
        <Form.Item
          name="gender"
          label="gender"
          rules={[
            {
              required: true,
              message: "Please input the gender of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="email"
          rules={[
            {
              required: true,
              message: "Please input the email of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const FormAdd = (props) => {
  const [visible, setVisible] = useState(false);
  const { handleCreate } = props;

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
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
