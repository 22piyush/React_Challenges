import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";

const { Option } = Select;

function AddTaskComponent({ handleClose, createTask, open }) {
  return (
    <Modal open={open} footer={null} onCancel={handleClose}>
      <h1 className="text-lg font-medium mb-4">New Task</h1>

      <Form onFinish={createTask} layout="vertical">
        <Form.Item
          name="taskName"
          label="Task Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter task name" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} placeholder="Task description" />
        </Form.Item>

        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select priority">
            <Option value="highest">Highest</Option>
            <Option value="medium">Medium</Option>
            <Option value="lowest">Lowest</Option>
          </Select>
        </Form.Item>

        <Button htmlType="submit" type="primary" block>
          Add Task
        </Button>
      </Form>
    </Modal>
  );
}

export default React.memo(AddTaskComponent);
