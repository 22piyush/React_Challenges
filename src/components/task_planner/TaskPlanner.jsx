import React, { useEffect, useState } from "react";
import "animate.css";
import {
  Badge,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Tag,
} from "antd";
const { Option } = Select;
import { Plus } from "lucide-react";

function TaskPlanner() {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  const createTask = (value) => {
    console.log(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="bg-white h-[60px] fixed top-0 left-0 w-full flex justify-between items-center px-8">
        <div>
          <button className="rounded-full h-10 w-10 bg-blue-600 font-bold text-white ">
            PL
          </button>
          <span className="text-xl font-bold ml-1">anner</span>
        </div>
        <div className="flex gap-4 items-center">
          <DatePicker />
          <h1 className="text-xl font-bold">{timer}</h1>
        </div>
      </nav>

      <section className="h-[calc(100%-120px)] fixed top-0 left-0 h-[500px] w-full mt-[60px] overflow-x-auto overflow-y-visible grid lg:grid-cols-3 gap-8 p-8">
        <div className="h-full lg:min-h-0  h-[300px]">
          <Badge.Ribbon
            text="Highest"
            className="!bg-gradient-to-r !from-rose-500 !via-pink-500 !to-rose-500 !font-medium "
          />
          <div className="bg-white p-6 rounded-lg min-h-0 h-full overflow-auto space-y-8">
            <button
              onClick={() => setOpen(true)}
              className="focus:shadow-lg hover:scale-105 transition-translate cursor-pointer duration-300 bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center gap-1 font-medium rounded-lg px-3 py-1 text-sm"
            >
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

        <div className="h-full lg:min-h-0  h-[300px]">
          <Badge.Ribbon
            text="Medium"
            className="!bg-gradient-to-r !from-indigo-500 !via-blue-500 !to-indigo-500 !font-medium z-[99999]"
          />
          <div className="bg-white p-6 rounded-lg min-h-0 h-full overflow-auto space-y-8">
            <button
              onClick={() => setOpen(true)}
              className="focus:shadow-lg hover:scale-105 transition-translate cursor-pointer duration-300 bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center gap-1 font-medium rounded-lg px-3 py-1 text-sm"
            >
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

        <div className="h-full lg:min-h-0  h-[300px]">
          <Badge.Ribbon
            text="Lowest"
            className="!bg-gradient-to-r !from-amber-500 !via-orange-500 !to-amber-500 !font-medium "
          />
          <div className="bg-white p-6 rounded-lg min-h-0 h-full overflow-auto space-y-8">
            <button
              onClick={() => setOpen(true)}
              className="focus:shadow-lg hover:scale-105 transition-translate cursor-pointer duration-300 bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center gap-1 font-medium rounded-lg px-3 py-1 text-sm"
            >
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
      </section>

      <footer className="bg-white px-8 h-[60px] fixed bottom-0 left-0 w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">Total Task - 22</h1>
        <p className="text-gray-500 hover:text-gray-900 cursor-pointer">
          Task Planner
        </p>
      </footer>

      <Modal
        open={open}
        footer={null}
        onCancel={handleClose}
        mask={{ closable: false }}
      >
        <h1 className="text-lg font-medium mb-4">New task</h1>
        <Form onFinish={createTask}>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input placeholder="Task name" size="large" />
          </Form.Item>

          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Task Description goes here" rows={5} />
          </Form.Item>

          <Form.Item name="description" rules={[{ required: true }]}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default TaskPlanner;
