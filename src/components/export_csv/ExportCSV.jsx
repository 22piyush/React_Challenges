import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React from "react";

function ExportCSV() {
  const createRecord = (values) => {
    values.date = mom
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col gap-10 p-10">
      <h1 className="text-4xl font-bold text-center">CSV Example</h1>
      <div className="bg-white rounded-lg p-4 w-9/12 mx-auto  flex items-center gap-5">
        <button className="bg-indigo-600 text-white font-medium px-12 py-3 rounded">
          New Record
        </button>
        <button className="bg-indigo-600 text-white font-medium px-12 py-3 rounded">
          New Record
        </button>
      </div>
      <div className="bg-white rounded-lg p-4 w-9/12 mx-auto flex-1">
        <div className="h-full overflow-auto">
          <table className="w-full border-collapse">
            {/* Header */}
            <thead className="sticky top-0 z-10 bg-rose-400 text-white">
              <tr className="text-left">
                <th className="pl-4 py-3">Customers Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <tr className="text-left border-b border-gray-300 text-black/60">
                <td className="pl-4 py-3">John</td>
                <td>9999999999</td>
                <td>john@mail.com</td>
                <td>Laptop</td>
                <td>₹50,000</td>
                <td>Paid</td>
              </tr>

              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open footer={null}>
        <Form layout="vertical" onFinish={createRecord}>
          <Form.Item
            label="Customer Name"
            name="customerName"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input size="large" placeholder="Enter customer name" />
          </Form.Item>

          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input size="large" placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Enter valid email" },
            ]}
          >
            <Input size="large" placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true, message: "Please enter product" }]}
          >
            <Input size="large" placeholder="Enter product name" />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please enter amount" }]}
          >
            <Input size="large" type="number" placeholder="Enter amount" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Select size="large" placeholder="Select status">
              <Select.Option value="cold">Cold</Select.Option>
              <Select.Option value="hot">Hot</Select.Option>
              <Select.Option value="clodsed">Clodsed</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select date" }]}
          >
            <DatePicker size="large" className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Add Customer
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ExportCSV;
