import React, { useState } from "react";
import "animate.css";
import { Badge, Button, Card, Form, Input, Modal, Select, Tag } from "antd";
const { Option } = Select;
import { Plus } from "lucide-react";

function TaskPlanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="bg-white h-[60px] fixed top-0 left-0 w-full"></nav>

      <section className="h-[calc(100%-120px)] fixed top-0 left-0 h-[500px] w-full mt-[60px] overflow-x-auto overflow-y-visible grid grid-cols-3 gap-8 p-8">
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Highest"
            className="!bg-gradient-to-r !from-rose-500 !via-pink-500 !to-rose-500 !font-medium "
          />
          <div className="bg-white p-16 rounded-lg min-h-0 h-full overflow-auto"></div>
        </div>

        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Medium"
            className="!bg-gradient-to-r !from-indigo-500 !via-blue-500 !to-indigo-500 !font-medium z-[99999]"
          />
          <div className="bg-white p-6 rounded-lg min-h-0 h-full overflow-auto space-y-8">
            <button className="focus:shadow-lg hover:scale-105 transition-translate cursor-pointer duration-300 bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center gap-1 font-medium rounded-lg px-3 py-1 text-sm">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
            <div className="flex flex-col gap-8">
              {Array(10)
                .fill(0)
                .map((item, index) => (
                  <Card key={index}>
                    <Card.Meta
                      title="Upload new video on youtube"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quasi ex atque voluptate adipisci, recusandae quod tempore quae. Doloribus voluptas repellendus iure illum quod soluta facere quo! Non, delectus ex."
                    />
                    <div className="mt-7 flex justify-between">
                      <div className="flex gap-4">
                        <Tag className="cursor-pointer">Pending</Tag>
                        <Tag className="cursor-pointer !bg-rose-500 !border-rose-500 !text-white">
                          Delete
                        </Tag>
                      </div>

                      <div>
                        <Select
                          size="small"
                          placeholder="Change Status"
                          style={{ width: 150 }}
                        >
                          <Option value="pending">Pending</Option>
                          <Option value="inProgress">In Progress</Option>
                          <Option value="completed">Completed</Option>
                        </Select>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Lowest"
            className="!bg-gradient-to-r !from-amber-500 !via-orange-500 !to-amber-500 !font-medium "
          />
          <div className="bg-white p-16 rounded-lg min-h-0 h-full overflow-auto"></div>
        </div>
      </section>

      <footer className="bg-white h-[60px] fixed bottom-0 left-0 w-full">
        <Modal open footer={null}>
            <h1 className="text-lg font-medium mb-4">New task</h1>
          <Form>
            <Form.Item name="title" rules={[{ requited: true }]}>
              <Input placeholder="Task name" size="large" />
            </Form.Item>

            <Form.Item name="description" rules={[{ requited: true }]}>
              <Input.TextArea
                placeholder="Task Description goes here"
                rows={5}
              />
            </Form.Item>

            <Form.Item name="description" rules={[{ requited: true }]}>
              <Button htmlType="submit" type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Modal>
      </footer>
    </div>
  );
}

export default TaskPlanner;
