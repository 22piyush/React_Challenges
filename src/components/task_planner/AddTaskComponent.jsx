import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";

function AddTaskComponent({ handleClose, createTask, open }) {
  return (
    <>
      <Modal
        open={open}
        footer={null}
        onCancel={handleClose}
        mask={{ closable: false }}
      >
        <h1 className="text-lg font-medium mb-4">New task</h1>
        <Form onFinish={createTask}>
          <Form.Item name="taskName" rules={[{ required: true }]}>
            <Input placeholder="Task name" size="large" />
          </Form.Item>

          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Task Description goes here" rows={5} />
          </Form.Item>

          <Form.Item name="priority" rules={[{ required: true }]}>
            <Select size="large" placeholder="Change Priority">
              <Option value="highest">Highest</Option>
              <Option value="medium">Medium</Option>
              <Option value="lowest">Lowest</Option>
            </Select>
          </Form.Item>

          <Form.Item name="description" rules={[{ required: true }]}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddTaskComponent;
