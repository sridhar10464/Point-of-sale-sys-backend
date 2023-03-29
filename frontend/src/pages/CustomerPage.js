import { Table } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout'

const CustomerPage = () => {
  const dispatch = useDispatch();
    const [billsData, setBillsData] = useState([]);
  
  const getAllBills = async () => {
    try {
        dispatch({
            type: "SHOW_LOADING"
        })
        const { data } = await axios.get("api/bills/get-bills")
        setBillsData(data);
        dispatch({ type: "HIDE_LOADING" });
        console.log(data);
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
        console.log(error)
    }
}
  // useEffect
  useEffect(() => {
   getAllBills()
  }, []);

  const columns = [
    { title: "ID", dataIndex: "_id" },
    { title: "Customer Name", dataIndex:"customerName"},
    { title: "Contact No", dataIndex: "customerNumber" },
  ]
  return (
    <DefaultLayout>
      <h1>Customer Page</h1>
      <Table columns={columns} dataSource={billsData} bordered pagination={false} />
    </DefaultLayout>
  )
}

export default CustomerPage