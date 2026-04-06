import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { CSVLink } from "react-csv";

function ExportCSV() {
  const [data, setData] = useState([]); // ✅ empty array
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const createRecord = (values) => {
    const newRecord = {
      ...values,
      date: moment(values.date).format("YYYY-MM-DD"),
    };

    setData([...data, newRecord]);
    handleClose(); // ✅ close modal after submit
  };

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col gap-10 p-10">
      <h1 className="text-4xl font-bold text-center">CSV Example</h1>

      {/* Buttons */}
      <div className="bg-white rounded-lg p-4 w-9/12 mx-auto flex items-center gap-5">
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white font-medium px-12 py-3 rounded"
        >
          New Record
        </button>
        {data.length > 0 && (
          <CSVLink data={data}>
            <button className="bg-rose-600 text-white font-medium px-12 py-3 rounded">
              Export to CSV
            </button>
          </CSVLink>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg p-4 w-9/12 mx-auto flex-1">
        <div className="max-h-[400px] overflow-auto">
          <table className="w-full border-collapse">
            {/* Header */}
            <thead className="sticky top-0 z-10 bg-rose-400 text-white">
              <tr className="text-left">
                <th className="pl-4 py-3">Customer Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="text-left border-b border-gray-300 text-black/60"
                >
                  <td className="pl-4 py-3">{item.customerName}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.product}</td>
                  <td>{item.amount}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} footer={null} onCancel={handleClose}>
        <Form layout="vertical" onFinish={createRecord} form={form}>
          <Form.Item
            label="Customer Name"
            name="customerName"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Mobile" name="mobile" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
            <Input size="large" type="number" />
          </Form.Item>

          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select size="large">
              <Select.Option value="Cold">Cold</Select.Option>
              <Select.Option value="Hot">Hot</Select.Option>
              <Select.Option value="Closed">Closed</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date" rules={[{ required: true }]}>
            <DatePicker size="large" className="w-full" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Add Customer
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ExportCSV;
