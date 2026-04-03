import React from "react";
import { Badge, Card, Select, Tag } from "antd";
const { Option } = Select;
import { Plus } from "lucide-react";

function CardComponent() {
  return (
    <>
      <section className="h-[calc(100%-120px)] fixed top-0 left-0 h-[500px] w-full mt-[60px] overflow-x-auto overflow-y-visible grid lg:grid-cols-3 gap-8 p-8">
        <div className="h-full lg:min-h-0  h-[300px]">
          <Badge.Ribbon
            text="Highest"
            className="z-[99999] !bg-gradient-to-r !from-rose-500 !via-pink-500 !to-rose-500 !font-medium "
          />
          <div className="bg-white p-6 rounded-lg min-h-0 h-full overflow-auto space-y-8">
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
            className="z-[99999] !bg-gradient-to-r !from-amber-500 !via-orange-500 !to-amber-500 !font-medium "
          />
          <div className="bg-white p-6 rounded-lg min-h-0 h-full overflow-auto space-y-8">
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
    </>
  );
}

export default CardComponent;
