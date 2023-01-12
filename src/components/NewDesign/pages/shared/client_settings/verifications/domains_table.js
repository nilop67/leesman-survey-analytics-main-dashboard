import React from 'react';
import { Table } from 'antd';


const Domains =()=> {

  const columns = [
    {
      title: '##',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
      render: (item) => (
          <strong className="">
            {item}
          </strong>
        ),
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
      render: (item) => (
          <strong className="">
            {item}
          </strong>
        ),
    },
    {
      title: 'Verified',
      dataIndex: 'verified',
      key: 'verified',
      render: (item) => (
          <div className="action_btns status">
            {item ?
            <span className="cxv-status-complete-active-l-icn "></span>
            :
            <span className="cxv-status-incomplete-l-icn "></span>}
          </div>
        ),
    },
    
    {
      title: 'Action',
      key: 'action',
      width:"130px",
      fixed: 'right',
      render: (_, record) => {
        return (
          <div className="action_btns">
              <div className="fixed__btn">
                
                <button className="icon__btn"><span className="cxv-delete-l-icn clients_table_drop"></span></button>
                
                {/* <Switch size="small" defaultChecked /> */}
              </div>
          </div>
        )
      },
    },
  ];
  

  const data = [
    {
      key: 'AB001',
      domain: 'leesmanindex.com',
      token: "3cde2499-d911-4a70-8618-4364fb3e1684",
      verified: false,
      
    },
    {
      key: 'AB002',
      domain: 'vapaka.com',
      token: "3cde2499-d911-4a70-8618-4364fb3e1684",
      verified: false,
    },
    {
      key: 'AB003',
      domain: 'outlook.com',
      token: "3cde2499-d911-4a70-8618-4364fb3e1684",
      verified: true,
    },
    {
      key: 'AB004',
      domain: 'lrhdesign.com',
      token: "3cde2499-d911-4a70-8618-4364fb3e1684",
      verified: true,
    },
    {
      key: 'AB005',
      domain: 'onexyazilim.com',
      token: "3cde2499-d911-4a70-8618-4364fb3e1684",
      verified: true,
    },
  ];
    


  return (
    <>
    <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}/>
    </>
  )
}

export default Domains;