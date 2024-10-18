import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { Button, Form, Input, Select, Space} from 'antd';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [form] = Form.useForm()

  // 表单提交
  const onFinish = (values: any) => {
    console.log(values);
  };

  // 清空
  const handleSearchReset= () =>{
    form.resetFields()
  }

  return <> 
  <Form
    name="search"
    form={form}
    layout="inline"
    onFinish={onFinish}
    initialValues={{
      name:'', author:'',category:''
    }}
  >
  <Form.Item name="name" label="名称">
    <Input />
  </Form.Item>
  <Form.Item name="author" label="作者">
    <Input />
  </Form.Item>
  <Form.Item name="category" label="分类"> 

    <Select 
      allowClear
      placeholder = "请选择"
      options={[
        {value: 'jack', label:'Jack'},
        {value: 'lucy', label:'lucy'},
        {value: 'alias', label:'alias', disabled: true},
    ]} />
  </Form.Item>
  <Form.Item>
    <Space>
      <Button type="primary" htmlType="submit">
        搜索
      </Button>
      <Button htmlType="submit" onClick={handleSearchReset}>
        清空
      </Button>
    </Space>
  </Form.Item>
</Form>
</>;
}