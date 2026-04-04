import React, { useMemo, useCallback } from "react";
import { Badge, Card, Select, Tag } from "antd";
import { usePlanner } from "./store/usePlanner";

const { Option } = Select;

function CardComponent() {
  const { tasks, deleteTask, updateStatus } = usePlanner();

  console.log(tasks);
  

  const groupedTasks = useMemo(() => {
    return {
      highest: tasks.filter((t) => t.priority === "highest"),
      medium: tasks.filter((t) => t.priority === "medium"),
      lowest: tasks.filter((t) => t.priority === "lowest"),
    };
  }, [tasks]);

  const handleDelete = useCallback(
    (id) => {
      deleteTask(id);
    },
    [deleteTask],
  );

  const handleStatusChange = useCallback(
    (id, value) => {
      updateStatus(id, value);
    },
    [updateStatus],
  );

  // ✅ Reusable render function
  const renderList = (list) =>
    list.map((task) => (
      <Card key={task.id}>
        <Card.Meta title={task.taskName} description={task.description} />

        <div className="mt-5 flex justify-between items-center">
          <div className="flex gap-3">
            <Tag>{task.status}</Tag>

            <Tag
              onClick={() => handleDelete(task.id)}
              className="cursor-pointer !bg-red-500 !text-white"
            >
              Delete
            </Tag>
          </div>

          <Select
            size="small"
            value={task.status}
            style={{ width: 140 }}
            onChange={(value) => handleStatusChange(task.id, value)}
          >
            <Option value="pending">Pending</Option>
            <Option value="inProgress">In Progress</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </div>
      </Card>
    ));

  return (
    <section className="h-[calc(100%-120px)] mt-[60px] grid lg:grid-cols-3 gap-6 p-6 overflow-auto">
      {/* Highest */}
      <div className="relative">
        <Badge.Ribbon text="Highest" color="red" />
        <div className="bg-white p-4 rounded-lg h-full overflow-auto space-y-4">
          {renderList(groupedTasks.highest)}
        </div>
      </div>

      {/* Medium */}
      <div className="relative">
        <Badge.Ribbon text="Medium" color="blue" />
        <div className="bg-white p-4 rounded-lg h-full overflow-auto space-y-4">
          {renderList(groupedTasks.medium)}
        </div>
      </div>

      {/* Lowest */}
      <div className="relative">
        <Badge.Ribbon text="Lowest" color="orange" />
        <div className="bg-white p-4 rounded-lg h-full overflow-auto space-y-4">
          {renderList(groupedTasks.lowest)}
        </div>
      </div>
    </section>
  );
}

export default React.memo(CardComponent);
